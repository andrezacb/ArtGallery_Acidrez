import {
	container,
	ContentInputButton,
	ContentInputText,
	ContetInputDisabled,
} from './styleDefault'
export const ButtonDefault = (props: any) => {
	return (
		<div className={container}>
			<button
				type='submit'
				className={!props.disabled ? ContentInputButton : ContetInputDisabled}
				onClick={props.onClick}
				disabled={props.disabled}>
				<div className={ContentInputText}>{props.name}</div>
			</button>
		</div>
	)
}
