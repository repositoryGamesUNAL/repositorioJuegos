import * as React from 'react';
import { useForm, Controller } from "react-hook-form";
import styles  from "./GameForm.module.scss";
import Headlines from '../../atoms/headlines/headlines';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Button from "../../atoms/button/button";
import { FormData } from "./GameForm.type";
import Input from '../../atoms/input/input';
import InputList from '../../molecules/inputList/inputList';

const steps = ['Datos generales', 'Conceptos fundamentales','Objetivos instruccionales', 'Reglas','Propositos'];



const GameForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const { control, handleSubmit, setValue ,getValues, getFieldState} = useForm<FormData>({
    defaultValues: {
      name: "",
      description: "",
      materials: [],
      gender: "",
      time: "",
      level: "",
      winnerCriteria: "",
      fundamentalConcepts: [], // Asegúrate de que sea un array vacío por defecto
      instructionalObjectives: [],
      rules: [],
      purposes: [],
      teams: { min: 0, max: 0 },
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    handleNext();
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} label="Nombre" value={field.value || ""} />}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => <Input {...field} value={field.value || ""} label="Descripción" />}
            />
            <Controller
                name="materials"
                control={control}
                render={({ field }) => ( 
                <InputList 
                  {...field} value={field.value || ""} 
                  placeholder='Material' 
                  layout='column' 
                  onChange={(inputs) => {
                    field.onChange(inputs);
                  }}
                />
              )}
            />
            <Controller
              name="gender"
              control={control}
              render={({ field }) => <Input {...field} value={field.value || ""} label="Género" />}
            />
            <Controller
              name="time"
              control={control}
              render={({ field }) => <Input {...field} value={field.value || ""} label="Tiempo" />}
            />
            <Controller
              name="level"
              control={control}
              render={({ field }) => <Input {...field} value={field.value || ""} label="Nivel" />}
            />
            <Controller
              name="winnerCriteria"
              control={control}
              render={({ field }) => <Input {...field} value={field.value || ""} label="Criterio ganador" />}
            />
            <Controller
              name="teams.min"
              control={control}
              render={({ field }) => <Input {...field} value={field.value || ""} label="Equipos (min)" />}
            />
            <Controller
              name="teams.max"
              control={control}
              render={({ field }) => <Input {...field} value={field.value || ""} label="Equipos (max)" />}
            />
          </>
        );
        case 1:  // Conceptos fundamentales
        return (
          <Controller
            name="fundamentalConcepts"
            control={control}
            render={({ field }) => (
              <InputList
                {...field}
                value={getValues("fundamentalConcepts")}
                title="Conceptos fundamentales"
                placeholder='Concepto Fundamental'
                onChange={(inputs) => {
                  field.onChange(inputs);
                }}
              />
            )}
          />
        );
      case 2:  // Objetivos instruccionales
        return (
          <Controller
            name="instructionalObjectives"
            control={control}
            render={({ field }) => (
              <InputList
                {...field}
                value={getValues("instructionalObjectives")}
                title="Objetivos instruccionales"
                placeholder='Objetivo Instruccional'
                onChange={(inputs) => {
                  field.onChange(inputs);
                }}
              />
            )}
          />
        );
      case 3:  // Reglas
        return (
          <Controller
            name="rules"
            control={control}
            render={({ field }) => (
              <InputList
                {...field}
                value={getValues("rules")}
                title="Reglas"
                placeholder='Regla'
                onChange={(inputs) => {
                  field.onChange(inputs);
                }}
              />
            )}
          />
        );
      case 4:  // Propósitos
        return (
          <Controller
            name="purposes"
            control={control}
            render={({ field }) => (
              <InputList
                {...field}
                value={getValues("purposes")}
                title="Propósitos"
                placeholder='Propósito'
                onChange={(inputs) => {
                  field.onChange(inputs);
                }}
              />
            )}
          />
        );
      default:
        return <></>;
    }
  };


  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={styles.container}>
      <Headlines level="h3" classNames={styles.headline} text="Make a game" />
      <div className={styles.stepper}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>

      {activeStep === steps.length ? (
        <React.Fragment>
          <div className="gray-container">
            <h3>Juego creado con éxito</h3>
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Crear otro</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="gray-container">
            <h3>Step {activeStep + 1}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
           <div className={styles["form-container"]}>
           {renderStepContent(activeStep)}
              {activeStep === steps.length - 1 && (
                <Button type="submit" onClick={handleSubmit(onSubmit)} className={styles["floating-button"]}>
                  Finalizar
                </Button>
              )}
           </div>
            </form>
          </div>

          <div className={styles["div-buttons"]}>
            <Button
              onClick={handleBack}
              size="medium"
              status={activeStep === 0 ? "disabled" : "default"}
              variant="main"
            >
              Back
            </Button>

            {activeStep !== steps.length - 1 && (
              <Button onClick={handleNext}>Next</Button>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default GameForm;
