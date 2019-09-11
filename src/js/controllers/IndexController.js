import './../../assets/sass/_main.scss';
import 'jquery';
import './../vendor/fancybox'; 

import { debounce, ease } from './../util/functions';

import Banner from '../ui/components/Banner';
import Gallery from '../ui/components/Gallery';
import Modal from '../ui/components/Modal';
import ModalHeader from '../ui/components/ModalHeader';
export default class IndexController {

    constructor() {

        console.log($);

        this._body = document.querySelector("body");
        this._menuBtn = document.querySelector("#menu-btn");
        this._banner = {
            title: document.querySelector(".banner__title")
        }



        this._galleryPhotos = document.querySelector(".gallery__photos");

        this.windowLoad();


    }

    // Mudar para o Index.html,  enquanto estiver carregando , carrega o component 'loading' , quando carregar
    windowLoad() {
        // Faz o evento enquanto a tela estiver carregando
        window.onload = () => {
            // document.body.removeChild(loading-screnn);


            this.initComponents();
            this.initEvents();
        }

    }


    initComponents() {

        this.loadGallery();
    }

    initEvents() { 
    
        // Button Events
        this._menuBtn.addEventListener('click', () => {
            event.preventDefault();
            event.stopPropagation();

            this.toggleMenu();
             this._body.addEventListener('click', () => this.closeMenu())

        });

        document.querySelector('#close-menu').addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMenu();
        })


        // Scroll Events
        document.querySelectorAll("[data-target='scroll']")
        .forEach(link => {

            const id = link.getAttribute('href');
            const scrollElement = document.querySelector(id);

            if(scrollElement) {
                link.addEventListener('click', event => {
                    event.preventDefault();
    
                    // window.focus();
                    window.scrollTo({
                        behavior: 'smooth',
                        left: 0,
                        top: scrollElement.offsetTop
                    })



                })
            }

   
        });


        // Modal Click Events(Generic)
        document.querySelectorAll("figure.photo")
        .forEach(photo => {

            console.log('PhotoAqui', photo)

            photo.addEventListener('click', (event) => {

                console.log('click');
                // 1 -  Busca os ambums
                // 2 - Cria novo modal com cada Item
                const modal = new Modal([
                    new ModalHeader({ title : 'Visualzar Photo' })
                ])

               

                modal.init();

                modal.on('closeModal', (id) => {
                    const modalElement = document.querySelector(`#modal__${id}`);
                    console.log(modalElement)
                    if(modalElement) {
                        document.body.removeChild(modalElement)
                    }
                })

 

            })

        })

        // Modal Load Photos by click


        this.initBanner();
    }




    // Mount Galerry
    loadGallery() {
        // Find in WebService


        const data = [
            {
                albumId: 1,
                url:"https://ap.imagensbrasil.org/images/imagens-lobos.jpg",
                label: "Nome da Figura 1"
            },
            {
                albumId: 2,
                url:"https://ap.imagensbrasil.org/images/imagens-lobos.jpg",
                label: "Nome da Figura 2"
            },
            {
                albumId: 3,
                url:"https://ap.imagensbrasil.org/images/imagens-lobos.jpg",
                label: "Nome da Figura 3"
            },
            {
                albumId: 4,
                url:"https://ap.imagensbrasil.org/images/imagens-lobos.jpg",
                label: "Nome da Figura 4"
            },
            {
                albumId: 5,
                url:"https://ap.imagensbrasil.org/images/imagens-lobos.jpg",
                label: "Nome da Figura 5"
            },

            {
                albumId: 6,
                url:"https://ap.imagensbrasil.org/images/imagens-lobos.jpg",
                label: "Nome da Figura 6"
            }
        ];


        const gallery = new Gallery(data);
            console.log(gallery);
        this._galleryPhotos.innerHTML = gallery.template();

    }





    toggleMenu() {
        const body = document.querySelector("body")
        body.classList.toggle('menu-active');
    }

    closeMenu() {
        const body = document.querySelector("body")
        body.classList.remove('menu-active');
    }




    initBanner() {
        const frases = this._getBanners();

        setInterval(() => {
            if(this._banner.title.classList.contains('banner__title--change')) {
                this._banner.title.classList.remove('banner__title--change')
            }

            const random = Math.floor(Math.random() * (frases.length));
            const fraseSelecionada = frases[random];

                this._banner.title.classList.add('banner__title--change')
                setTimeout(() => {
                    this._banner.title.innerHTML = fraseSelecionada;
    
                }, 2000)
    
    
        }, 6000);
    }

    _getBanners() {
        return this._getBannerMessages()
        .map(message => Banner(message));
    }

    _getBannerMessages() {
       return [
        {
            messages: ["Seja um padrão de", "As pessoas estão aconstumadas a um ambiente onde o melhor é o esperado"],
            mark: "qualidade",
            author: "Steve Jobs"
        }, 

        {
            messages: [ "A qualidade nunca se obtém por acaso;", "Ela é sempre resultado do esforço inteligente." ],
            mark: "",
            author: "John Ruskin"
        },

        {
            messages: ["Qualidade significa fazer certo", "quando ninguém está olhando."],
            mark: "",
            author: "Henry Ford"
        },
        
        {
            messages: ["A qualidade de seu trabalho", "tem a ver com a qualidade de sua vida."],
            author: "Orison Swett Marden"
        }]
    }




}