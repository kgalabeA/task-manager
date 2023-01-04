 export interface Task{
    name:string,
    description:string,
    progress:'complete'|'incomplete',
    startDate:Date,
    endDate:Date,
};

export default interface TaskInterface extends Task{
    id:string;
};