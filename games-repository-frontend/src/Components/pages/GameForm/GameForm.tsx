import * as React from 'react';
import { useForm, Controller } from "react-hook-form";
import styles  from "./GameForm.module.scss";
import Headlines from '../../atoms/headlines/';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from "../../atoms/button/";
import { FormData } from "./GameForm.type";
import Input from '../../atoms/input/';
import InputList from '../../molecules/inputList/';
import { handleSendGame } from '../../../services/HandleSendGame/handleSend';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { handleModifyGame } from '../../../services/HandleModifyGame/handleModify';

const steps = ['Datos generales', 'Conceptos fundamentales','Objetivos instruccionales', 'Reglas','Propositos'];

const GameForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [isLoading, setIsLoading] = React.useState(true); // Estado para el loader
  const { id } = useParams();
  const [createdId,setCreatedId] = React.useState(0);
  const navigate = useNavigate();
  const { control, handleSubmit, setValue, reset, getValues } = useForm<FormData>({
    defaultValues: {
      name: "",
      description: "",
      materials: [],
      gender: "",
      time: "",
      level: "",
      winnerCriteria: "",
      fundamentalConcepts: [],
      instructionalObjectives: [],
      rules: [],
      purposes: [],
      teams: { min: 0, max: 0 },
    },
  });
  
  // Fetch data when `action` is "edit"
  React.useEffect(() => {
    if (id) {
      console.log("Fetching game data...");
      axios
        .get(`http://localhost:3000/games/${id}`)
        .then((response) => {
          const data = response.data;
          console.log(data);
          reset({
            name: data.name || "",
            description: data.description || "",
            materials: data.materials || [],
            gender: data.genre || "",
            time: data.time || "",
            level: data.level || "",
            winnerCriteria: data.winner || "",
            fundamentalConcepts: data.concepts || [],
            instructionalObjectives: data.objectives || [],
            rules: data.rules || [],
            purposes: data.purpose || [],
            teams: {
              min: data.teams?.min || 0,
              max: data.teams?.max || 0,
            },
          });
          setCreatedId(data.id);
        })
        .catch((error) => {
          console.error("Error fetching game data:", error);
        })
        .finally(() => {
          setTimeout(() => {setIsLoading(false);} , 1500);
        });
    } else {
      setIsLoading(false); // No hay datos que cargar
    }
  }, [ id, reset]);

  const onSubmit = async (data: FormData) => {
    // Convertir `min` y `max` explícitamente (aunque ya son números)
    const min = Number(data.teams.min);
    const max = Number(data.teams.max);
  
    // Crear el objeto `teams` directamente
    const teams = {
      min,
      max,
    };
  
    // Crear el nuevo juego
    const newGame = {
      name: data.name,
      description: data.description,
      purpose: data.purposes,
      thematic: "Tematica 1",
      genre: data.gender,
      materials: data.materials,
      objectives: data.instructionalObjectives,
      time: data.time,
      concepts: data.fundamentalConcepts,
      rules: data.rules,
      winner: data.winnerCriteria,
      teams: teams,
      level: data.level,
      related: [],
    };
  
    // Procesar la siguiente acción
    if (id) {
      const number_id = Number(id);
      handleModifyGame(newGame, number_id);
    } else {
      try {
        // Esperar a que se resuelva la promesa de handleSendGame
        const newId = await handleSendGame(newGame);
        setCreatedId(newId);
      } catch (error) {
        console.error('Error al crear el juego:', error);
      }
    }
  
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handleNext();
    }, 1500);
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
              key={20}
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
              key={21}  
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
                key={10}
                name="materials"
                control={control}
                render={({ field }) => ( 
                <InputList 
                  {...field} 
                  value={field.value} 
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
                key={22}
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
                key={23}    
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
                key={24}
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
              key={25}
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
                key={26}
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
                key={27}
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

  const handleEdit = () => {
    console.log("Editar", createdId);
    navigate(`/game/edit/${createdId}/`);
  };

  if (isLoading) {
    // Loader mientras los datos se cargan
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

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
          <h3>{(id  ? "Juego creado con éxito": "Juego editado con éxito" )} </h3>
          <div className={styles.buttonsContainer}>
            <Button onClick={handleReset}>Crear otro</Button>
            {id ? (
              <Link to={`/game/edit/`}>
                <Button className={styles.buttons} >Editar</Button>
              </Link>
            ) : (
              <Button className={styles.buttons} onClick={handleReset}>Editar de nuevo</Button>
            )}
          </div>

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