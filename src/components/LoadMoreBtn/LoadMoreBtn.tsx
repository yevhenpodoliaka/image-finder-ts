import style from "./LoadMoreBtn.module.css"
type LoadMoreBtnProps = {
 onClick:()=>void   
}
export const LoadMoreBtn = ({ onClick }:LoadMoreBtnProps) => {
   return <button className={style.button} onClick={onClick}>Load More</button>
};