<template>
	<div>
		<swiper
		:modules="modules"
		:slidesPerView="1"
		class="slider-projects">
			<swiper-slide v-for="(item, index) in selectedProject" :key="index">
				<div class="flex relative">
					<div class="info-text p-8 ">
						<p class="step-process Acumin-pro-wide mt-auto mb-3">{{ item.titulo }}</p>
						<p v-if="item.subtitulo" class="step-process-text Acumin-pro-wide-extra-light mb-4">{{ item.subtitulo }}</p>
						<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">{{ item.descripcion }}</p>
						<p v-if="item.subdescripcion" class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">{{ item.subdescripcion }}</p>
						<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">{{ item.estado }}</p>
					</div>
					<div class="wc-300px hc-84">
						<swiper
						:modules="modules"
						:autoplay="{ delay: 6000, disableOnInteraction: true }"
						:pagination="true"
						:slidesPerView="1"
						:mousewheel="true"
					    :effect="'fade'"
						navigation
						class="h-full">
							<swiper-slide v-for="(img, idx) in item.imagenes" :key="idx">
								<img :src="img" :alt="`Render ${idx+1} de ${item.titulo}`" class="w-full h-full">
							</swiper-slide>
						</swiper>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Navigation,Pagination, Scrollbar, Mousewheel, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Navigation,Pagination, Scrollbar, Mousewheel, Autoplay, EffectFade]

const router = useRouter()
const route = useRoute()

const filteredProject = ref({})
const selectedProject = ref([])


onBeforeMount(() => {
	filteredProject.value = projectsList.value.find(project => project.id === route.params.nombre);
	selectedProject.value.push(filteredProject.value)
})

const projectsList = ref([
    {
        id: 'CalaGranadellaJavea',
        titulo: 'Cala Granadella · Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - A.jpg',
        imagenes: [
			'/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - A.jpg',
			'/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - B.jpg',
			'/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - C.jpg',
			'/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - D.jpg',
			'/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - E.png',
			'/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - F.png',
			'/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - G.jpg',
		],
    },
    {
        id: 'CuestaSanAntonioJavea',
        titulo: 'Cuesta de San Antonio · Jávea',
        subtitulo: 'Conectando espacios en varios desniveles.',
        descripcion: 'Una especial reforma de los arquitectos Nieto Sobejano en una vivienda en el Cabo de San Antonio, Jávea. El jardín se articula en diferentes espacios, respetando las vistas e integrando las diferentes áreas y desniveles con el entorno. La selección de especies se llevó a cabo teniendo en cuenta la cercanía del mar y el uso estacional de la vivienda por parte de los Propietarios.',
        estado: 'Obra terminada - Año 2018.',
        imagen: '/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-A.jpg',
		imagenes: [
			'/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-A.jpg',
			'/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-B.jpg',
			'/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-C.jpg',
			'/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-D.jpg',
			'/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-E.jpg',
			'/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-F.jpg',
			'/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-G.jpg',
			'/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-H.jpg',
		],
    },
    {
        id: 'CasaMalvaJavea',
        titulo: 'Casa Malva. Jardí d ́Olivella· Jávea',
        subtitulo: 'Jardín enclavado en la montaña, de estética naturalista, que busca integrarse en el entorno.',
        descripcion: 'Nos apoyarnos sobre las curvas de nivel originales para configurar varias terrazas que permitan un recor rido por el jardín y la creación de varias zonas estanciales. En la entrada, enclavada entre los muros de la roca y de la fachada, surge un patio con un pequeño área estancial, acompañada de una lámina de agua y de ejemplares potentes.',
        subdescripcion: 'La ecología y la rec uperación del espacio ha sido un valor remarcado por el Cliente en todo momento.',
        estado: 'Obra pendiente de construcción.',
        imagen: '/img/PROYECTOS/3JardinOlivellaJavea/01MalvaVisualFrontal.jpg',
		imagenes: [
			'/img/PROYECTOS/3JardinOlivellaJavea/01MalvaVisualFrontal.jpg',
			'/img/PROYECTOS/3JardinOlivellaJavea/02MalvaVisualFrontal-EstancialLectura.jpg',
			'/img/PROYECTOS/3JardinOlivellaJavea/03MalvaVisualFrontal-EstancialAgua.jpg',
			'/img/PROYECTOS/3JardinOlivellaJavea/04MalvaVisualPerspectiva.jpg',
			'/img/PROYECTOS/3JardinOlivellaJavea/05MalvaVisualPatio.jpg',
			'/img/PROYECTOS/3JardinOlivellaJavea/06MalvaVisualNoche.jpg',
		],
    },
    {
        id: 'CasaCaracolJavea',
        titulo: 'Casa Caracol · Jávea',
        subtitulo: 'Jardín sostenible en una vivienda singular de Jávea.',
        descripcion: 'Jardín de nueva construcción en una vivienda singular de Jávea, del arquitecto Manuel Jorge, caracterizado por diseños que se mimetizan con el entorno. El jardín se ha diseñado teniendo en cuenta el espacio singular en el que se encuentra, rodeado de pinos, y pretende integrarse con la vivienda por medio de espacios austeros y vegetación pulcra y sencilla. Se han creado diferentes espacios exteriores que permiten ampliar la superficie propia del espacio interior, de modo que la casa se abre hacia afuera. La ecología, sostenibilidad, empleo racional del agua y respeto al entorno están presentes de forma intensa en este proyecto.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-A.jpg',
		imagenes: [
			'/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-A.jpg',
			'/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-B.jpg',
			'/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-C.jpg',
			'/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-D.jpg',
			'/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-E.jpg',
			'/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-F.jpg',
			'/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-G.jpg',
		],
    },
    {
        id: 'EsCanarIbiza',
        titulo: 'Es Canar · Ibiza',
        subtitulo: 'Jardín mediterráneo con una amplia selección de especies.',
        descripcion: 'Reforma de un jardín muy amplio en una zona exclusiva de Ibiza. Se han conformado diferentes áreas estanciales como un comedor exterior o una zona de lectura, que se conectan mediante el trazado de diferentes caminos y sendas, que permiten recorrer el jardín inmerso en una selección de especies mediterráneas, buscan do potenciar el ecosistema preexistente.',
        estado: 'Obra en construcción - Año 2023.',
        imagen: '/img/PROYECTOS/04EsCanarIbiza/EsCanar-01.jpg',
		imagenes: [
			'/img/PROYECTOS/04EsCanarIbiza/EsCanar-01.jpg',
			'/img/PROYECTOS/04EsCanarIbiza/EsCanar-02.jpg',
			'/img/PROYECTOS/04EsCanarIbiza/EsCanar-03.jpg',
			'/img/PROYECTOS/04EsCanarIbiza/EsCanar-04.jpg',
			'/img/PROYECTOS/04EsCanarIbiza/EsCanar-05.jpg',
			'/img/PROYECTOS/04EsCanarIbiza/EsCanar-06.jpg',
		],
    },
    {
        id: 'TossaletJavea',
        titulo: 'Tossalet · Jávea',
        subtitulo: 'Jardín de una segunda residencia en Jávea.',
        descripcion: 'Un jardín amplio que se organiza en dos espacios, una zona más delicada alrededor de la vivienda y la piscina, y otra más silvestre, con un campo de naranjos y un huerto rodeando la pista de pádel. La integración de las líneas de la arquitectura con las del jardín fue una de las premisas de este proyecto.',
        estado: 'Obra terminada - Año 2019.',
        imagen: '/img/PROYECTOS/05Tossalet/TossaletJavea-01.jpg',
		imagenes: [
			'/img/PROYECTOS/05Tossalet/TossaletJavea-01.jpg',
			'/img/PROYECTOS/05Tossalet/TossaletJavea-02.jpg',
			'/img/PROYECTOS/05Tossalet/TossaletJavea-03.jpg',
			'/img/PROYECTOS/05Tossalet/TossaletJavea-04.jpg',
			'/img/PROYECTOS/05Tossalet/TossaletJavea-05.jpg',
			'/img/PROYECTOS/05Tossalet/TossaletJavea-06.jpg',
		],
    },
    {
        id: 'MorellJavea',
        titulo: 'Morell · Jávea',
        subtitulo: 'Jardín delicado en una vivienda unifamiliar muy cuidada.',
        descripcion: 'Jardín en una zona montañosa de Jávea, sustrato de piedra, varias zonas umbrías y grandes diferencias de altura. Se organiza en cuatro zonas que permiten disfrutar del jardín según las estaciones y las horas del día. Una zona norte muy agradable con vistas al mar, una zona sur soleada donde se coloca una fuente apoyada en la roca existente, la zona este con una pérgola acompañada de parras y por último la zona oeste donde se sitúa la piscina y el desayunador.',
        estado: 'Obra terminada - Año 2017.',
        imagen: '/img/PROYECTOS/06MorellJavea/MorellJavea-01.jpg',
		imagenes: [
			'/img/PROYECTOS/06MorellJavea/MorellJavea-01.jpg',
			'/img/PROYECTOS/06MorellJavea/MorellJavea-02.jpg',
			'/img/PROYECTOS/06MorellJavea/MorellJavea-03.jpg',
			'/img/PROYECTOS/06MorellJavea/MorellJavea-04.jpg',
			'/img/PROYECTOS/06MorellJavea/MorellJavea-05.JPG',
			'/img/PROYECTOS/06MorellJavea/MorellJavea-06.jpg',
			'/img/PROYECTOS/06MorellJavea/MorellJavea-07.JPG',
		],
    },
    {
        id: 'Golf',
        titulo: 'Centro Nacional del Golf · Madrid',
        subtitulo: 'Superficie multifuncional.',
        descripcion: 'Creación de un espacio de uso público multifuncional dentro de un complejo deportivo representativo en Madrid capital. El uso principal de este espacio es el de restaurante, a la vez que es posible flexibilizar lo para diferentes eventos. El pavimento seleccionado es de tipo terrizo y se combina con cenefas de piedra natural, buscando una sensación campestre a la vez que elegante y amable. La ubicación de diferentes ejemplares de tilos aportan una cubierta potente que proyectará sombra en verano y permitirá el paso del sol en invierno.',
        estado: 'Obra pendiente de construcción.',
        imagen: '/img/PROYECTOS/07CNGOLF/CNGolf-01.jpg',
		imagenes: [
			'/img/PROYECTOS/07CNGOLF/CNGolf-01.jpg',
			'/img/PROYECTOS/07CNGOLF/CNGolf-02.jpg',
			'/img/PROYECTOS/07CNGOLF/CNGolf-03.jpg',
			'/img/PROYECTOS/07CNGOLF/CNGolf-04.jpg',
			'/img/PROYECTOS/07CNGOLF/CNGolf-05.png',
		],
    },
    {
        id: 'AmetllaDelValles',
        titulo: `L´Ametlla del Vallès · Barcelona`,
        subtitulo: null ,
        descripcion: 'Vivienda de nueva construcción con un toque clásico dentro de una parcela con ligeras pendientes que se aprovechan para crear diferentes niveles que devuelven ambientes distintos. La vegetación, mediterránea, acompaña suavemente los estanciales y recorridos. La simplicidad y el cuidado en e l trazado del espacio es la clave de este proyecto.',
        estado: 'Obra pendiente de construcción.',
        imagen: '/img/PROYECTOS/08Alzira/Alzira-01.jpg',
		imagenes: [
			'/img/PROYECTOS/08LAmetllaDelValles/03LAmetllaDelValles-Piscina01.jpg',
			'/img/PROYECTOS/08LAmetllaDelValles/02LAmetllaDelValles-Piscina02.jpg',
			'/img/PROYECTOS/08LAmetllaDelValles/01LAmetllaDelValles-Piscina03.jpg',
			'/img/PROYECTOS/08LAmetllaDelValles/04LAmetllaDelValles-Posterior01.jpg',
			'/img/PROYECTOS/08LAmetllaDelValles/05LAmetllaDelValles-Posterior.jpg',
			'/img/PROYECTOS/08LAmetllaDelValles/06LAmetllaDelValles-Posterior.jpg',
		],
    },
    {
        id: 'Alzira',
        titulo: 'Alzira · Valencia',
        subtitulo: 'Jardín delicado en una vivienda unifamiliar muy cuidada.',
        descripcion: 'Pequeño jardín de una vivienda cuyo interiorismo está cuidado al máximo detalle en Alzira, Valencia. Las líneas orgánicas , en combinación con la arquitectura y los materiales del interior, devuelven un aspecto singular, que combina con las piedras escultóricas y la vegetación cuidadosamente seleccionada.',
        estado: 'Obra terminada - Año 2023.',
        imagen: '/img/PROYECTOS/08Alzira/Alzira-01.jpg',
		imagenes: [
			'/img/PROYECTOS/08Alzira/Alzira-01.jpg',
			'/img/PROYECTOS/08Alzira/Alzira-02.jpg',
			'/img/PROYECTOS/08Alzira/Alzira-03.jpg',
			'/img/PROYECTOS/08Alzira/Alzira-04.jpg',
		],
    },
    {
        id: 'Piver',
        titulo: 'Piver · Jávea',
        subtitulo: 'Jardín rigurosamente mediterráneo en una zona de reminiscencias agrícolas.',
        descripcion: 'Reforma de un jardín de carácter natural en una vivienda unifamiliar reformada en Jávea. La propiedad comprende diferentes parcelas unidas y se ha pretendido cohesionarlas para que el jardín sea un todo, aunque respetando los diferentes espacios.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/09PiverJavea/PIVER 01.JPG',
		imagenes: [
			'/img/PROYECTOS/09PiverJavea/PIVER 01.jpg',
			'/img/PROYECTOS/09PiverJavea/PIVER 02.jpg',
			'/img/PROYECTOS/09PiverJavea/PIVER 03.jpg',
			'/img/PROYECTOS/09PiverJavea/PIVER 04.jpg',
		],
    },
])
</script>

<style scoped>
.container-img{
	width: 100%;
	background-position: left;
    background-size: cover;
}
.img-slider-proceso {
    height: calc(100dvh - 84px);
    object-fit: cover;
	object-position: left;
    /* width: 100%; */
}

.info-text{
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 300px;
    height: calc(100dvh - 84px);
}
.step-process {
    color: #000000;
    font-size: 12px;
}
.step-process-text{
    color: #7A7A7A !important;
    font-size: 12px;
    font-weight: 300 !important;
}
</style>
