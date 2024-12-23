import React from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './GeneralStep.module.scss';
import { GeneralStepProps } from './GeneralStep.type';

const GeneralStep: React.FC<GeneralStepProps> = ({child, param}) => {
	const { state, dispatch } = useForm();

	const handleChange = (inputs: string[]) => {
		const newData = {
			[param]: inputs,
		}
		
		dispatch(
			{ type: 'UPDATE_FORM_DATA', 
				payload: newData 
			}
		);
	};

	return (
		<div className={styles.step2Container}>
      		{React.cloneElement(child, { onChange: handleChange })}
		</div>
	);
};

export default GeneralStep;
