import dotenv from 'dotenv';

type Tconfig = {
    [key: string]: EnvironmentConfig;
}

type EnvironmentConfig = {
    app: AppConfig;
}

type AppConfig = {
    PORT: string | number;
    //MONGO_DB_URI: string;
}

if (process.env.NODE_ENV === 'production') {
  dotenv.config({path: '.env.production'});
}else{
  dotenv.config({path: '.env.development'});
}

const ENV = process.env.NODE_ENV ?? 'development';
const PORT= 3000;

const CONFIG: Tconfig = {
    development: {
        app: {
            PORT: process.env.PORT || 3000
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 3001
        }
    }
}

export default CONFIG[ENV];