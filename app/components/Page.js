'use client'

import { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactPlayer  from 'react-player';
import StaggeredText from './StaggeredText';

import { motion,useScroll, useTransform,useMotionValue,useAnimate,useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);


// Define the Home component
export default function Page() {

  const [scope, animateFirst] = useAnimate()
  const [scope2, animateSecond] = useAnimate()
  const [scope3, animateThird] = useAnimate()


  const imagePreload = [];

  const firstCount =  useMotionValue(0)
  const secondCount =  useMotionValue(0)
  const thirdCount =  useMotionValue(0)

  const roundedFirst = useTransform(firstCount, latest => Math.round(latest))
  const roundedSecond = useTransform(secondCount, latest => Math.round(latest))
  const roundedThird = useTransform(thirdCount, latest => Math.round(latest))




  useEffect(() => {

    const totalFrames = 178;

    const promises = [];
    for (let i = 1; i <= totalFrames; i++) {
      const imageUrl = `/bomb-sequence-jpg/ezgif-frame-${i}.jpg`;
      const image = new Image();
      
      
      // Create a promise for each image
      const promise = new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });
  
      image.src = imageUrl;
      imagePreload.push(promise);
      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      ScrollTrigger.create({
        trigger:'.sequenceContainer',
        start: 'top center',
       
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const scrollProgress = self.progress;
          const targetFrame = Math.round(scrollProgress * totalFrames)
          const imageUrl = `/bomb-sequence-jpg/ezgif-frame-${targetFrame}.jpg`;
          sequence.style.backgroundImage = `url(${imagePreload[0].url})`;
    sequence.style.transition = 'background-image 0.2s ease-in-out';
          sequence.style.backgroundImage = `url(${imageUrl})`;
          
          sequence.style.backgroundSize = 'cover';
        }
      })
    
    });
    
        let scroll;
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true
            });
        });

        const controls1 = animateFirst(firstCount,70000,{duration: 2})
        const controls2 = animateSecond(secondCount,40000,{duration: 2})
        const controls3 = animateThird(thirdCount,100000,{duration: 2})
        const sequence = document.querySelector('.sequence')
       

        let ctx = gsap.context(() => {
    
        let pinsSection03 = gsap.to('.desc03Container', { color: '', ease: 'none', duration: 0.25});
        let pinsSection04 = gsap.to('.desc03Container', { color: '', ease: 'none', duration: 0.25});
        let pinsSection05 = gsap.to('.desc03Container', { color: '', ease: 'none', duration: 0.25});
        let pinVideo = gsap.to('.video', { color: '', ease: 'none', duration: 0.25});




      

        ScrollTrigger.create({
          trigger: "body",
          start:"top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const scrollProgress = self.progress;
            gsap.to('.progressBar', {scaleX: 100 * scrollProgress})
          }
          })


         

        // LARGAGE DE LA BOMBE 
        gsap.fromTo(
            '.avion-bombe',
            { x: '-50%', y: 0 },
            {
            x: '35%',
            y: '25vh',
            scrollTrigger: {
                trigger: '.section06',
                start: 'top center', // Adjust as needed based on when you want the animation to start
                end: 'bottom center', // Adjust as needed based on when you want the animation to end
                scrub: true, // Smoothly animate as the user scrolls
            },
            }
        ); 

        gsap.fromTo(
            '.bombe',
            { y:'-500%', visibility: 'hidden', scale:1},
            {
            
            y:1000,
            scale:1.5,
            visibility:'visible',
            scrollTrigger: {
                trigger : '.avion-bombe',               
                start: 'center center',
                endTrigger: '.bomb',
                end: 'bottom center',
                scrub:true
            }
            }
        )

        ////////////////////////////
        
        // PIN DESCRIPTION 
 

        ScrollTrigger.create({
            trigger: ".section03",
            start: "top top",
            end: 'bottom bottom',
            markers: false,
            pin: true,
            pinSpacing: false,
            animation: pinsSection03,
            toggleActions: 'play reverse play reverse'
        });

        ScrollTrigger.create({
          trigger: ".video",
          start: "top top",
          end: 'bottom bottom',
          markers: false,
          pin: true,
          pinSpacing: false,
          animation: pinVideo,
          toggleActions: 'play reverse play reverse'
      });

        ScrollTrigger.create({
            trigger: ".section04",
            start: "top top",
            end: 'bottom bottom',
            markers: false,
            pin: true,
            pinSpacing: false,
            animation: pinsSection04,
            toggleActions: 'play reverse play reverse'
        });

        ScrollTrigger.create({
            trigger: ".section05",
            start: "top top",
            end: 'bottom bottom',
            markers: false,
            pin: true,
            pinSpacing: false,
            animation: pinsSection05,
            toggleActions: 'play reverse play reverse'
        });



  

        })

        return () => {
        ctx.revert();
        if(scroll){
            scroll.destroy()
        }
        controls1.stop
        controls2.stop
        controls3.stop
        }
    
  }, []); 





  return (
    <>
  
   
    <div className="progressBar bg-white fixed inset-0 h-5 w-[2%] z-[100]"/> 
    
    <div className='container mx-auto  xl:p-0  2xl:p-0 text-neutral-50'>
      <section id="section1" className='smooth-scroll h-screen flex flex-col items-center justify-center'>
        <div className='py-14 grid grid-cols-12 gap-y-5 crelative  w-full font-display-italic'>
            <div data-scroll data-scroll-speed="0.8">
            <StaggeredText className="  text-[14em]  2xl:text-[17em] col-span-12  h-48 2xl:h-60 flex uppercase" text="Hiroshima"/>
            </div>
            <div className="col-span-12 bg-white h-[2px]" data-scroll data-scroll-speed="2"></div>
            <div className='col-span-5 overflow-hidden' data-scroll data-scroll-speed="0.4">
                <ReactPlayer className="col-span-2 mr-96 " url={'/video/oppenheimer_interview.webm'} muted playing loop/>
            </div>
            <div className='col-span-7 p-5  pt-0' data-scroll data-scroll-speed="0.2">
                <p className='font-body italic columns-2 text-left text-lg opacity-75'>
            La bombe nucléaire, créée par les États-Unis pendant la Seconde Guerre mondiale, demeure un sinistre témoignage de la capacité destructrice de l&#39;humanité. 
            Cette arme devastatrice, constituée d&#39;un concentré de matière nucléaire, a tristement marqué  l&#39;histoire les 6 et 9 août 1945. 
            Hier comme Aujourd&#39;hui, l&#39;arme nucléaire est au coeur de nombreux conflits géopolitiques, comme la crise des missiles de Cuba, en 1962, jusqu&#39;à la controverse liée au développement de missiles nucléaires intercontinentaux par la Corée du Nord en 2020. 
            À travers cette experience, vous allez découvrir les éléments qui ont menés au 6 août 1945, jour où le monde entier à pu assister à la terreur qu&#39;inspire l&#39;arme nucléaire. 
                </p>
            </div>
       </div>
      </section>




{/* Début de la seconde guerre mondiale */}

    <div className="relative h-[200vh] mb-32">
      <section id="section3" className='section03 h-full'>
        <div className="desc03Container pin w-2/5 pt-[25vh] ml-auto flex flex-col">
        <StaggeredText className="text-[10rem] opacity-50 text-left font-display-italic -mb-14" text="1939"/>
        
          <h2 className='pin text-4xl mb-4 font-heading'>Début de la seconde guerre mondiale</h2>
          <div className="desc03 rounded bg-opacity-30">
            
            <p className='font-body-light opacity-90 text-lg'>
            En 1939, avec le déclenchement de la guerre, Albert Einstein prend l&#39;initiative d&#39;envoyer une lettre au président Franklin D. Roosevelt. 
            Son intention est d&#39;avertir des risques potentiels liés à la possibilité que l&#39;Allemagne nazie développe des armes atomiques.
            </p>
          </div>
        </div>
      </section>

      <div>
      <motion.div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}}  whileHover={{scale:1.2}} className='flex absolute left-0 top-[20%] flex-col z-50 w-[35vw]'>
        <div  data-scroll data-scroll-speed="">
        <img  className='right-12 w-full' src="/debarquement.jpg" alt="" />
        <h4 className='opacity-70 italic text-right font-body'>Débarquement de Normandie</h4>
        </div>
      </motion.div>
 
        <motion.div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}} whileHover={{scale:1.2}} className='flex absolute left-[30%] top-[40%] z-50  flex-col w-[20vw] '  >
        <div data-scroll data-scroll-speed="0.4">
        <img className=' w-full' src="/prop1.jpg" alt="" />
        <h4 className='opacity-70 italic text-right font-body'>Affiche de propagande Allemande</h4>
        </div>
        </motion.div>

        < motion.div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}} whileHover={{scale:1.2}}  className='flex absolute  left-[5%] top-[60%] z-50 flex-col w-[20vw]' >
        <div data-scroll data-scroll-speed="0.8">
        <img className='w-full' src="/prop2.jpg" alt="" />
        <h4 className='opacity-70 italic text-right font-body'>Affiche de propagande Française</h4>
        </div>
        </motion.div>
      </div>


    </div>

{/*Projet Manhattan */}

    <div className="relative h-[200vh] mb-32">
      
      <section className='h-full section04'>
        <div className="desc04Container  w-2/5 pt-[25vh]">
            <StaggeredText className="text-[10rem] opacity-50 text-left font-display-italic -mb-14" text="1941"/>
        {/*<h1 className='text-[10rem] opacity-50 text-left font-display-italic -mb-14'>1941</h1>*/}
          <h2 className='pin text-4xl mb-4 font-heading'>Projet Manhattan</h2>
          <div className="desc04">
              <p className='font-body-light text-lg'>
              En 1941, le Projet Manhattan voit officiellement le jour, réunissant les esprits scientifiques les plus brillants de l&#39;époque dans le but de mettre au point la bombe atomique. 
              Près de 125 000 personnes contribuent à ce projet colossal. Parmi elles, Robert Oppenheimer, Enrico Fermi et Ernest Lawrence émergent comme les figures scientifiques majeures du projet dans le  Los Alamos National Laboratory. 
              En 1942, J. Robert Oppenheimer est nommé directeur scientifique du Projet Manhattan.
              </p>
            </div>
        </div>
      </section>
      <div>
      <motion.div  initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}} whileHover={{scale:1.2}} className='flex absolute right-0 top-[20%] z-50 flex-col w-[30vw]'>
        <div data-scroll data-scroll-speed="0.1">
        <img className='right-12 w-full' src="/manhattan-panel.jpg" alt="" />
        <h4 className='opacity-70 italic text-right font-body'>Entrée du site du projet Manhattan</h4>
        </div>
        </motion.div>
 
        <motion.div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}} whileHover={{scale:1.2}} className='flex absolute right-[20%] top-[50%] z-50 flex-col w-[25vw]'  >
        <div data-scroll data-scroll-speed="0.2">
        <img className='right-12 w-full' src="/manhattan-site.jpg" alt="" />
        <h4 className='opacity-70 italic text-right font-body'>Site du projet Manhattan</h4>
        </div>
        </motion.div>

        <motion.div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}} whileHover={{scale:1.2}} className='flex absolute  right-[5%] top-[70%] flex-col z-50 w-[30vw]' >
        <div data-scroll data-scroll-speed="0.4">
        <img className='right-12 w-full' src="/manhattan-personel.jpg" alt="" />
        <h4 className='opacity-70 italic text-right font-body'>Scientifiques ayant collaboré au projet Manhattan</h4>
        </div>
        </motion.div>
      </div>

    </div>

{/*Trinity Test */}
    <div className="relative h-[200vh]">
      <section className='h-full section05'>
        <div className="desc05Container  w-2/5 pt-[25vh] ml-auto">
        <StaggeredText className="text-[10rem] opacity-50 text-left font-display-italic -mb-14" text="1945"/>
          <h2 className='pin text-4xl mb-4 font-heading'>Trinity Test</h2>
        <div className="desc05">
        <p className='font-body-light text-lg'>
        Le Trinity Test a eu lieu le 16 juillet 1945 dans le désert du Nouveau-Mexique, il marque le premier essai réussi d&#39;une bombe atomique. Ce test secret, connu sous le nom de code Trinity, était le point culminant du Projet Manhattan.
        À l&#39;aube, une bombe fut déclenchée depuis une tour d&#39;essai, créant une explosion intense et dévastatrice. Cet événement historique a ouvert la voie à l&#39;utilisation des bombes atomiques sur Hiroshima et Nagasaki quelques semaines plus tard, mettant fin à la guerre.
        Le Trinity Test reste un moment crucial dans l&#39;histoire, symbolisant le début de l&#39;ère nucléaire et soulevant des questions éthiques persistantes sur l&#39;utilisation de telles armes destructrices.
        </p>
        </div>
        </div>
      </section>
      <div>
      <motion.div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}} whileHover={{scale:1.2}} className='flex absolute left-0 top-0 z-50 flex-col w-[40vw]' >
        
        <div data-scroll data-scroll-speed="0.1">
        <img className='right-12 w-full' src="/trinity-public.png" alt="" />
        <h4 className='opacity-70 italic text-right font-body'>Personel observant le Test Trinity</h4>
        </div>
        </motion.div>
 
        <motion.div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}} whileHover={{scale:1.2}} className='flex absolute left-[10%] top-[30%] z-50 flex-col w-[35vw]'  >
        
        <div data-scroll data-scroll-speed="0.2">
        <img className='right-12 w-full' src="/trinity_bomb.webp" alt="" />
        <h4 className='opacity-70 italic text-right font-body'>Bombe Trinity</h4>
        </div>
        </motion.div>

        <motion.div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}} whileHover={{scale:1.2}} className='flex absolute  left-[-5%] top-[60%] z-50 flex-col w-[30vw]'>
        
        <div data-scroll data-scroll-speed="0.6">
        <img className='right-12 w-full' src="/trinity-impact.png" alt="" />
        <h4 className='opacity-70 italic text-righ font-body'>Site d&#39;impact de la bombe Trinity</h4>
        </div>
        </motion.div>
      </div>

    </div>

    <div className='h-[100vh] flex flex-col items-center justify-center'>
      <div className='pt-96 -mb-32'><h1 className='pin text-[8rem] mb-4 font-heading pt-24 uppercase' data-scroll data-scroll-speed="-0.3">6 Août </h1></div>
      <div className='date flex pt-96'>
          <span className='text-[20rem] opacity-50 text-left font-display-italic -mb-14' data-scroll data-scroll-speed="0.5">1</span>
          <span className='text-[20rem] opacity-50 text-left font-display-italic -mb-14' data-scroll data-scroll-speed="0.4">9</span>
          <span className='text-[20rem] opacity-50 text-left font-display-italic -mb-14' data-scroll data-scroll-speed="0.3">4</span>
          <span className='text-[20rem] opacity-50 text-left font-display-italic -mb-14' data-scroll data-scroll-speed="0.2">5</span>
      </div>

    </div>

      <section className="section06 h-[100v]">
       <div className="avion-bombe flex relative">
        <img className='avion  z-20 w-[70rem] z-[10000]' src="/bombardier.png" alt="" />
       </div>
      </section>

      <div className='bomb flex relative h-[130vh] '>
      <img className='bombe absolute w-32 rotate-90 left-[50%] -z-10 pin' src="/bomb.png" alt="" />
      </div>

    

      <div className='video sequenceContainer h-[500vh] w-full'>
      <div  className='p-50 inset-0 videoPlayer sequence h-[100vh] w-fullborder-10'></div>
      </div>



      <div className=' mt-48 flex flex-col gap-24 items-center justify-center'>
        
        <div data-scroll className='flex flex-col'>
          <div className='flex -mb-14'>
          <StaggeredText className="text-[15rem] opacity-50 text-left font-display-italic " text="140000"/>
          </div>
          <h1 className='text-6xl font-heading italic'>victimes totales</h1>
        </div>


      <div className='flex  w-full items-center justify-center  mt-88'>
        <div className=''>
          <div className='-mb-14 flex'>
          <StaggeredText className="text-[10rem] opacity-50 text-left font-display-italic " text="73,5%"/>
          </div>
          <h1 className='text-3xl font-heading italic'> meurent à l&#39;impact </h1>
        </div>

        <div className=' ml-auto'>
          <div className='-mb-14 flex'>
          <StaggeredText className="text-[10rem] opacity-50 text-left font-display-italic " text="11,3%"/>
          </div>
          <h1 className='text-3xl font-heading italic'> meurent dès la première semaine</h1>
        </div>
        <div>

        </div>
      </div>

      <div className='flex  w-full items-center '>
        <div className=''>
          <div className='-mb-14 flex'>
            <StaggeredText className="text-[10rem] opacity-50 text-left font-display-italic " text="3,14%"/>
       
          </div>
          <h1 className='text-3xl font-heading italic'> meurent pendant la deuxièmme semaine </h1>
        </div>

        <div className=' ml-auto'>
          <div className='-mb-14 flex'>
          <StaggeredText className="text-[10rem] opacity-50 text-left font-display-italic " text="9,9%"/>
          </div>
          <h1 className='text-3xl font-heading italic'> meurent après 3 à 8 semaines</h1>
        </div>
   
      </div>


        
        
      </div>



   
     


      </div> 
      
   

      
   </>
  );
}

