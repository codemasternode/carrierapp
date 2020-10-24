import server from './server';
import 'dotenv/config';

const port = parseInt(process.env.NODE_PORT_INSIDE || '4000');

const starter = new server()
    .start(port)
    .then((port) => console.log(`Running on port ${port}`))
    .catch((error) => {
        console.log(error);
    });

export default starter;
