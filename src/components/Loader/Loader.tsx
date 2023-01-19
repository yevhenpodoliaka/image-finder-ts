import { Blocks } from 'react-loader-spinner';
import style from './Loader.module.css';

type LoaderProps = {
  visible:boolean  
}

export const Loader = ({ visible }:LoaderProps) =>{
  return (
    <div className={style.loaderWrapper}>
      <Blocks
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="blocks-loading"
        visible={visible}
      />
    </div>
  );
}