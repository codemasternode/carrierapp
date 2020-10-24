import express from 'express';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        //this.routerConfig();
    }

    private config() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json({ limit: '1mb' }));
    }

    // private routerConfig() {}

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app
                .listen(port, () => {
                    resolve(port);
                })
                .on('error', (err: Error) => reject(err));
        });
    };
}

export default Server;
