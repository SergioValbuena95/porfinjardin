<template>
    <div class="hc-84  flex flex-col items-center justify-center relative px-4">
		<div class="flex lg:max-w-[850px] min-h-[500px] mx-auto gap-x-8">
			<div class="w-[280px] hidden lg:block">
				<div>
					<p class="f-13-black-600">Contacto</p>
					<p class="f-12-info Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">Llámame  (+34) 676 993 222</p>
					<p class="f-12-info Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">Envíame un correo <a href="mailto:estudio@noemianton.com">estudio@noemianton.com</a> </p>
				</div>
				<div class="mt-8">
					<p class="f-13-black-600">Estudio</p>
					<p class="f-12-info Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">Noemi Antón</p>
					<p class="f-12-info Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">Avenida de la Libertad 19</p>
					<p class="f-12-info Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">Jávea, España</p>
					<p class="f-12-info Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">(+34) 676 993 222</p>
				</div>
			</div>
			<div class="w-[280px]">
				 <form id="emailForm">
					<div class="flex flex-col mb-6">
						<label class="label Acumin-pro-wide mb-2" for="userName">Nombre:</label>
						<input v-model="name" type="text" id="userName" name="userName" class="h-[38px] w-full border-b" required>
					</div>
					<div class="flex flex-col mb-6">
						<label class="label Acumin-pro-wide mb-2" for="userName">Email:</label>
						<input v-model="email" type="email" id="userName" name="userName" class="h-[38px] w-full border-b" required>
					</div>
					<div class="flex flex-col mb-6">
						<label class="label Acumin-pro-wide mb-2" for="userName">Número de teléfono:</label>
						<input v-model="phoneNumber" type="text" id="userName" name="userName" class="h-[38px] w-full border-b" required>
					</div>
					<div class="flex flex-col mb-6">
						<label class="label Acumin-pro-wide mb-2" for="userName">Ubicación del jardín:</label>
						<input v-model="location" type="text" id="userName" name="userName" class="h-[38px] w-full border-b" required>
					</div>
					<div class="flex flex-col mb-6">
						<label class="label Acumin-pro-wide mb-2" for="userName">Superficie aproximada (m2):</label>
						<input v-model="area" type="text" id="userName" name="userName" class="h-[38px] w-full border-b" required>
					</div>
					<div class="flex flex-col mb-6">
						<label class="label Acumin-pro-wide mb-2" for="userMessage">En qué te puedo ayudar:</label>
						<textarea v-model="message" id="userMessage" name="userMessage" class="h-[38px] w-full border-b" required></textarea>
					</div>
					<button type="submit" class="w-full border border-gray-200 hover:bg-[#0000001a] transition-all duration-300" @click="sendEmail">Enviar</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const location = ref('');
const area = ref('');
const message = ref('');

function sendEmail() {
	const subject = encodeURIComponent("Candidato: " + name.value);
	const body = encodeURIComponent("Nombre: " + name.value + "\n\nCorreo: " + email.value + "\n\nCelular: " + phoneNumber.value+ "\n\nUbicación: " + location.value+ "\n\nArea: " + area.value + "\n\nMensaje:\n" + message.value);
	if(name.value && email.value){
		const mailtoLink = document.createElement('a');
		mailtoLink.href = `
			mailto:${'estudio@noemianton.com'}?
			subject=${subject}&
			body=${body}`
		mailtoLink.target = "_blank";
		document.body.appendChild(mailtoLink);
		mailtoLink.click();
		document.body.removeChild(mailtoLink);
	}
}
</script>

<style scoped>
p.f-13-black-600{
	color: #000000;
    font-family: "Acumin-Pro-Wide", Sans-serif;
    font-size: 13px;
    font-weight: 600;
	margin-bottom: 10px;
}
p.f-12-info{
    font-size: 12px;
    font-weight: 300;
    color: #7A7A7A !important;
}
label.label{
	color: black;
    font-weight: 900;
	font-size: 12px;

}
</style>