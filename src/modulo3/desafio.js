// // Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// const umPorSegundo = async () => {
//     await delay();
//     console.log("1s");

//     await delay();
//     console.log("2s");

//     await delay();
//     console.log("3s");
// }
// umPorSegundo();




// import axios from 'axios';

// const getUserFromGithub = async (user) => {
//     try {
//         const respUser = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(respUser.data);
//     } catch (err) {
//         console.log(err);
//         console.log('Usuário não existe');
//     }
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');




// import axios from 'axios';

// class Github {
//     static async getRepositories(repo) {
//         try {
//             const result = await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(result.data);
//         } catch (error) {
//             console.log(error);
//             console.log('Repositório não existe');
//         }

//     }
// }
// Github.getRepositories('Rocketseat/comunidade');
// Github.getRepositories('rocketseat/dslkvmskv');



// import axios from 'axios';

// const buscaUsuario = async usuario => {
//     try {
//         const resp = await axios.get(`https://api.github.com/users/${usuario}`);
//         console.log(resp.data);
//     } catch (error) {
//         console.log(error);
//         console.log('Usuário não existe');
//     }
// }
// buscaUsuario('diego3g');