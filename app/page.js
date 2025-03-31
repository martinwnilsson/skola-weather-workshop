import {getData} from "@/logic/data";

export default function Home() {
    console.log("data", getData(58, 16));
    useEffect(() => {
        getData(58, 16)
        .then(data => {
            console.log("data", data);
        })
        .catch(error => {
            console.log("error", error);
        })
    });
  return <div>
        <p>HEllo</p>
    </div>
}
