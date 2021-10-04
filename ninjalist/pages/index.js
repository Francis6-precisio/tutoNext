import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque
        magna, accumsan vitae dolor quis, sagittis varius odio. Cras fermentum
        consectetur mauris, id aliquet eros dictum non. Vestibulum libero nulla,
        tempor id lectus eget, porttitor fermentum elit. Donec auctor elit sed
        tortor eleifend ultrices. Donec vitae lacinia tortor, in malesuada
        lorem. Vestibulum dictum, ex eu commodo lacinia, risus tellus bibendum
        urna, ac fermentum ipsum turpis sed tellus. Proin ullamcorper convallis
        massa, at sollicitudin augue. Proin enim nisi, placerat eget ullamcorper
        sollicitudin, dictum eu justo. Integer bibendum suscipit semper. Donec
        sagittis blandit eleifend. Praesent dictum velit pulvinar mauris
        ullamcorper, quis pharetra nulla luctus. Donec eu convallis eros. In hac
        habitasse platea dictumst.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque
        magna, accumsan vitae dolor quis, sagittis varius odio. Cras fermentum
        consectetur mauris, id aliquet eros dictum non. Vestibulum libero nulla,
        tempor id lectus eget, porttitor fermentum elit. Donec auctor elit sed
        tortor eleifend ultrices. Donec vitae lacinia tortor, in malesuada
        lorem. Vestibulum dictum, ex eu commodo lacinia, risus tellus bibendum
        urna, ac fermentum ipsum turpis sed tellus. Proin ullamcorper convallis
        massa, at sollicitudin augue. Proin enim nisi, placerat eget ullamcorper
        sollicitudin, dictum eu justo. Integer bibendum suscipit semper. Donec
        sagittis blandit eleifend. Praesent dictum velit pulvinar mauris
        ullamcorper, quis pharetra nulla luctus. Donec eu convallis eros. In hac
        habitasse platea dictumst.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
