import * as React from 'react';
import { useForm, Controller } from "react-hook-form";
import styles  from "./GameForm.module.scss";
import Headlines from '../../atoms/headlines/';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Button from "../../atoms/button/";
import { FormData } from "./GameForm.type";
import Input from '../../atoms/input/';
import InputList from '../../molecules/inputList/';
import { handleSendGame } from '../../../services/HandleSendGame/handleSend';

const steps = ['Datos generales', 'Conceptos fundamentales','Objetivos instruccionales', 'Reglas','Propositos'];

const GameForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const { control, handleSubmit, setValue ,getValues, reset} = useForm<FormData>({
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
    const newGame = {
      name: data.name,
      purpose: data.purposes,
      thematic: ["tematica","tematica2"],
      genre: data.gender,
      materials: data.materials,
      objectives: data.instructionalObjectives,
      time: data.time,
      concepts: data.fundamentalConcepts,
      rules: data.rules,
      winner: data.winnerCriteria,
      teams: data.teams,
      level: data.level,
      related: [],
    }
    handleNext();
    handleSendGame(newGame);
  };

  const descriptionStyle=[
    styles.inputChild,
    styles['inputChild--description']
  ].join(' ');

  const columnInputs=[
    styles.inputFather,
    styles['inputFather--column']
  ].join(' ');

  const columChildInputs=[
    styles.inputChild,
    styles['inputChild--column']
  ].join(' ');

	const inputTeam=[
		styles.inputChild,
		styles['inputChild--numeric']
	].join(' ');

	const inputFatherInput=[
		styles.inputFather,
		styles['inputFather--numeric']
	].join(' ');


  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div className={styles.step1}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input 
                  {...field} 
                  label="Nombre"
                  placeholder='Nombre del juego' 
                  containerClassName={styles.inputFather}
                  className={styles.inputChild}
                  squeare={true}
                  value={field.value || ""} 
                />)}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => 
                <Input {...field} 
                  value={field.value || ""} 
                  placeholder='Descripción del juego'
                  type='textarea'
                  squeare={true}
                  containerClassName={styles.inputFather}
                  className={descriptionStyle}
                  label="Descripción" 
                />}
            />
            <Controller
                name="materials"
                control={control}
                render={({ field }) => ( 
                <InputList 
                  {...field} 
                  value={field.value || ""} 
                  placeholder='Material' 
                  layout='column' 
                  onChange={(inputs) => {
                    field.onChange(inputs);
                  }}
                />
              )}
            />
            <div className={styles.horizontalInput}>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => 
                  <Input 
                    {...field} 
                    value={field.value || ""} 
                    label="Género" 
                    squeare={true}
                    className={columChildInputs}
                    containerClassName={columnInputs}
                  />}
              />
              <Controller
                name="time"
                control={control}
                render={({ field }) => 
                  <Input 
                    {...field} 
                    value={field.value || ""} 
                    label="Tiempo"
                    squeare={true}
                    className={columChildInputs}
                    containerClassName={columnInputs}
                  />}
              />
              <Controller
                name="level"
                control={control}
                render={({ field }) => 
                  <Input 
                    {...field} 
                    value={field.value || ""} 
                    label="Nivel" 
                    squeare={true}
                    className={columChildInputs}
                    containerClassName={columnInputs}
                  />}
              />
            </div>
            <Controller
              name="winnerCriteria"
              control={control}
              render={({ field }) => 
                <Input 
                  {...field} 
                  value={field.value || ""} 
                  label="Criterio ganador" 
                  containerClassName={styles.inputFather}
                  className={styles.inputChild}
                  squeare={true}
                />}
            />

            <div className={styles.horizontalInput}>
              <Controller
                name="teams.min"
                control={control}
                render={({ field }) => 
                  <Input 
                    {...field} 
                    squeare={true}
                    placeholder='0'
                    containerClassName={inputFatherInput}
                    className={inputTeam}
                    type='number'
                    value={field.value || ""} 
                    label="Equipos (min)" 
                  />}
              />
              <Controller
                name="teams.max"
                control={control}
                render={({ field }) => 
                  <Input 
                    {...field}
                    squeare={true}
                    placeholder='0' 
                    containerClassName={inputFatherInput}
                    className={inputTeam}
                    value={field.value || ""} 
                    label="Equipos (max)" 
                  />}
              />
            </div>
          </div>
        );
        case 1:  // Conceptos fundamentales
        return (
          <Controller
            key={1}
            name="fundamentalConcepts"
            control={control}
            render={({ field }) => (
              <InputList
                className={styles.generalStep}
                {...field}
                value={getValues("fundamentalConcepts")}
                title="Conceptos fundamentales"
                placeholder='Concepto Fundamental'
                onChange={(inputs) => {
                  setValue("fundamentalConcepts", inputs);
                }}
              />
            )}
          />
        );
      case 2:  // Objetivos instruccionales
        return (
          <Controller
            key={2}
            name="instructionalObjectives"
            control={control}
            render={({ field }) => (
              <InputList
                className={styles.generalStep}
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
            key={3}
            name="rules"
            control={control}
            render={({ field }) => (
              <InputList
                {...field}
                className={styles.generalStep}
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
            key={4}
            name="purposes"
            control={control}
            render={({ field }) => (
              <InputList
                {...field}
                className={styles.generalStep}
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
    reset();
  };

  return (
    <div className={styles.container}>
      <Headlines level="h3" classNames={styles.headline} text="Crea un Juego" />
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
          <h3>Juego creado con éxito</h3>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Crear otro</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
           <div className={styles["form-container"]}>
            {renderStepContent(activeStep)}
           </div>
            </form>
          </>

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

            {activeStep === steps.length - 1 && (
              <Button onClick={handleSubmit(onSubmit)}>Finalizar</Button>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default GameForm;