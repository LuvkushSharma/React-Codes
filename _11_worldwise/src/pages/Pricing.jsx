
import PageNav from "../components/PageNav"


// ----------- Lec_2 -------------

/*

function Pricing() {
    return (
        <div>
            <PageNav/> 
            <h1>Pricing</h1>
        </div>
    )
}

export default Pricing

*/

// ------------ Lec_4 -------------

// Uses the same styles as Product
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>

      <PageNav/>

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}