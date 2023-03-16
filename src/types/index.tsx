export type stringType = string;
export type booleanType = boolean;
export type numberType = number;
export interface IPropsString {
	searchValue:stringType
}

export interface IPayloadTypes {
	payload: numberType
}
export interface IPropsHeader {
	onChange: (e: stringType) => void;
	setSearchValue: (e: stringType) => void;
	searchValue: stringType;
}

export interface IPropsModal {
	setActiveModal: (e:booleanType) => void;
}
export interface IState {
	employers: {
		employers: IDataEmployer[];
		employer: IDataEmployer;
		loading: booleanType;
		errorData: stringType;
		id:numberType
	};
}

export interface IDataGeo {
	lat: numberType;
	lng: numberType;
}

export interface IDataAddress {
	street: stringType;
	suite: stringType;
	city: stringType;
	zipcode: stringType;
	geo: IDataGeo;
}

export interface IDataCompany {
	name: stringType;
	catchPhrase: stringType;
	bs: stringType;
}

export interface 	IDataEmployer {
	id: numberType;
	name: stringType;
	username: stringType;
	email: stringType;
	address: IDataAddress;
	phone: numberType;
	website: stringType;
	company: IDataCompany;
}

export interface IPropsRow {
	user:IDataEmployer,
	setFilteredUsers:(e:any) => void ,
	searchValue:  stringType  ,
	setActiveModal:(e:boolean)=>void
}


export interface IPropsLightString{
	searchValue:stringType,
	string:stringType
}
