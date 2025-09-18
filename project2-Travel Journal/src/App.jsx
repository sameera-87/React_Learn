import Header from "./components/Header"
import Entry from "./components/Entry"

//import images
import australia from "./assets/australia.jpg"
import france from "./assets/france.jpg"
import japan from "./assets/japan.jpg"

export default function App() {

  return(
    <>
      <Header />
      <Entry 
        img={{
          src: japan ,
          alt:"Mount Fuji"
        }}
        
        title="Mount Fuji"
        country="Japan"
        googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/
                    @35.3572019,138.7178474,14.47z/data=!4m6!3m5!1s0x6019629a42fdc899
                    :0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?
                    authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
        dates="12 Jan, 2023 - 24 Jan 2023"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters, 
        and is an active stratovolcano. It is a sacred symbol in Japanese culture and 
        a popular destination for pilgrims and tourists alike. The mountain is especially 
        admired for its symmetrical snow-capped peak, which has inspired countless 
        artworks and poems."



      />
      <Entry 
        img={{
          src:australia,
          alt:"Sydney Opera House"
        }}
        
        title="Sydney Opera House"
        country="Australia"
        googleMapsLink="https://www.google.com/maps/place/Sydney+Opera+House/
        @-33.8567844,151.213108,17z"
        dates="05 Feb, 2023 - 12 Feb 2023"
        text="The Sydney Opera House is one of the most iconic architectural landmarks 
        in the world, located on Sydney Harbour. Opened in 1973, it is renowned for its 
        sail-like design and serves as a multi-venue performing arts centre. It has 
        become a symbol of both Sydney and Australia, attracting millions of visitors 
        each year."



      />
      <Entry 
        img={{
          src:france,
          alt:"Eiffel Tower"
        }}
        
        title="Eiffel Tower"
        country="France"
        googleMapsLink="https://www.google.com/maps/place/Eiffel+Tower/@48.8583736,2.2922926,17z"
        dates="15 Mar, 2023 - 20 Mar 2023"
        text="The Eiffel Tower, constructed in 1889, is a wrought-iron lattice tower 
        on the Champ de Mars in Paris. Standing at 330 meters, it was once the tallest 
        structure in the world. Originally built as the entrance arch for the 1889 World's 
        Fair, it is now a global cultural icon of France and one of the most visited 
        monuments worldwide."



      />
    </>
  )

}

