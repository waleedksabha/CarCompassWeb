export class CommonRequest {
  format: string | undefined;
  makeId: number | undefined;
  modelyear: number | undefined;
}

export class ResponseResult<T> {
  count: number | undefined;
  message: string | undefined;
  searchCriteria: string | undefined;
  results: any | undefined;
}

export class GetAllMakesModel {
  make_ID: number | undefined;
  make_Name: string | undefined;
}

export class TypesForMakeModel {
  vehicleTypeId: number | undefined;
  vehicleTypeName: string | undefined;
}

export class ModelsForMakeIdYearModel {
  make_ID: number | undefined; 
  make_Name: string | undefined; 
  model_ID: number | undefined;
  model_Name: string | undefined;
}

export enum apiType{
  getAllMakes = 1,
  getVehicleTypesForMakeId = 2,
  getModelsForMakeIdYear = 3
}
