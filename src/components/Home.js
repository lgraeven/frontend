import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "../config";

const Home = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const TOKEN = config.TOKEN;

    useEffect(() => {
        fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${TOKEN}`)
            .then(Response => {
                if (!Response.ok) {
                    setError(new Error(`${Response.status}-bad request`))
                    setIsPending(false)
                }
                return Response.json()
            })
            .then(data => {
                console.log(data.data)
                setData(data.data)
                setIsPending(false)
            })
            .catch(er => {
                setError(er)
                setIsPending(false)
            })
    }, [TOKEN])

    return (
        <main className="cadre">
            <h1>Unité scout d'Hermée</h1>
            <aside className="publi">
                <section className="lorem">
                    <h3>Dernières publications</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet delectus esse id quaerat reiciendis aspernatur molestiae earum totam commodi consectetur corrupti incidunt, minima perferendis sequi modi nisi eum error.</p>
                </section>
                <section className="lorem">
                    <h3>Historique de l'unité</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laborum delectus dolorum doloribus tempora molestias deleniti dolor dicta, et quisquam quae ea aliquid placeat excepturi unde dolorem quod necessitatibus ad?</p>
                </section>
            </aside>
        </main>
    )
}
export default Home;
