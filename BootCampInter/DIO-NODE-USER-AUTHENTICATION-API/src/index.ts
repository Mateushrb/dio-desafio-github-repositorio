// Importação do gerenciador de rotas
import express from 'express';

// Importação do gerenciador de error
import errorHandler from './middlewares/error-handler.middleware';

// Importação das rotas
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';


// Instância da biblioteca
const app = express();

// Configuração do servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// Rotas
app.use(statusRoute)
app.use(usersRoute);

// Configuração dos Handlers de Erro
app.use(errorHandler)

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
})

