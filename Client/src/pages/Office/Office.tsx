import Estudio from "../../assets/Estudio.jpg";
const Office = () => {
  return (
    <div className="w-full flex 2xl:mb-40 flex-col items-center justify-center  bg-black">
      <h3 className=" font-bold text-4xl text-yellow-text  ">Sobre mi...</h3>
      <div className="flex w-full max-md:flex-col justify-around h-2/3 p-5">
        <img src={Estudio} width={900} className=" rounded-md" alt="estudio" />
        <div className=" w-1/2 max-md:w-full mb-9 font-Almarai max-md:text-base text-center text-lg font-semibold">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            ducimus aliquid voluptatem eum tempora autem! Maiores doloribus
            natus cupiditate obcaecati nam, repudiandae fugit totam quae beatae
            numquam mollitia odit dolorum. In recusandae libero ipsam. Eveniet
            reiciendis nesciunt, ad aspernatur voluptas, ipsa excepturi
            consectetur distinctio velit neque, tenetur eligendi odio sint nulla
            architecto aperiam doloremque molestiae officia nostrum.
            Exercitationem, officiis sit? Eius beatae autem aliquid adipisci
            dignissimos reprehenderit quasi voluptates repudiandae quis
            architecto impedit nostrum vero et sunt alias temporibus quo
            doloremque asperiores corporis fugiat, illo perferendis nisi!
            Perspiciatis, fugiat perferendis? Cum quam, assumenda libero qui
            commodi fugit iste eos! Obcaecati incidunt illum minus reprehenderit
            soluta libero voluptatem qui nisi quia in quasi,
          </p>
          <p className="p-5">Telefono: +543254518</p>
          <p>Email: carlos_sde_77@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Office;
