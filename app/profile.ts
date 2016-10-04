export class Profile {
    constructor (
        public firstName: string,
        public lastName: string,
        public age: number,
        public profession: string,
        public city: string,
        public state: string,
        public monday: boolean,
        public tuesday: boolean,
        public wednesday: boolean,
        public thursday: boolean,
        public friday: boolean,
        public saturday: boolean,
        public sunday: boolean,
        public time: string,
        public handicap?: number,
        public company?: string,
    ) {}
}