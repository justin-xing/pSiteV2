import Typography from "@mui/material/Typography";
import GithubButton from './GithubButton';

const Project = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2vh 0 2vh 0'}}>
      <Typography variant="h4" style={{margin: '3vh 0 3vh 0'}}>{props.name}</Typography>
      <img src={props.image} alt={props.name} style={{width: '50%',height: 'auto'}}/>
      <Typography style={{margin: '3vh 0 1vh 0', width: '50%', height: 'auto', textAlign: 'center'}}>{props.description}</Typography>
      <GithubButton link={props.github}/>
    </div>
  );
}

export default Project;