import { useSelector } from "react-redux";
import * as S from "./modal.styles";
import { FC } from "react";
import { IPropsModal, IState } from "types";

const Modal: FC<IPropsModal> = ({ setActiveModal }): JSX.Element => {
	const address = useSelector(
		(state: IState) => state.employers.employer.address || [],
	);
	const company = useSelector(
		(state: IState) => state.employers.employer.company || [],
	);

	const deActivateModal = () => {
		setActiveModal(false);
	};

	return (
		<S.ModalContainer onClick={deActivateModal}>
			<div onClick={(e) => e.stopPropagation()}>
				<h2>Name of company</h2>
				<p className="companyName">"{company.name}"</p>
				<h2>Address of company</h2>
				<span className="addressStreet">
					Street: <span className="companyAddress">{address.street}</span>
				</span>
				<br />
				<span className="addressSuite">
					Suite: <span className="companyAddress">{address.suite}</span>
				</span>
				<br />
				<span className="addressCity">
					City: <span className="companyAddress">{address.city}</span>
				</span>
			</div>
		</S.ModalContainer>
	);
};

export default Modal;
