import { Articulo } from "./articulo"
import InfiniteScroll from "react-infinite-scroll-component"
export function Resto ({lista})
{   
    return (
    
    <div className="resto" id="infiniteScroll">
        <InfiniteScroll dataLength={15} hasMore={true}scrollableTarget="infiniteScroll">
            <table>
                <tbody>
                    {lista}
                </tbody>
            </table>
        </InfiniteScroll>   
    </div>  
    )
    
}