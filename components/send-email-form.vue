<template>
  <form
    action="/api/send-mail" method="post" autocomplete="on"
    class="rounded-box form-control grid grid-cols-1 md:grid-cols-2 bg-neutral text-neutral-content p-8 pt-2"
    @submit.prevent="onSubmit">

    <div class="md:pr-4 pt-4">
      <label for="firstName" class="label">
        <span class="label-text">Votre prénom</span>
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        minlength="1"
        maxlength="100"
        required
        class="input input-bordered w-full" />
    </div>

    <div class="md:pl-4 pt-4">
      <label for="lastName" class="label">
        <span class="label-text">Votre nom de famille</span>
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        minlength="1"
        maxlength="100"
        required
        class="input input-bordered w-full " />
    </div>

    <div class="md:pr-4 pt-4">
      <label for="subject" class="label">
        <span class="label-text">Sujet</span>
      </label>
      <input
        id="subject"
        name="subject"
        type="text"
        minlength="1"
        maxlength="100"
        required
        class="input input-bordered w-full" />
    </div>

    <div class="md:pl-4 pt-4">
      <label for="email" class="label">
        <span class="label-text">Votre adresse courriel</span>
      </label>
      <input
        id="email"
        name="email"
        type="email"
        minlength="1"
        maxlength="100"
        required
        class="input input-bordered w-full " />
    </div>

    <div class="pt-4 md:col-span-2">
      <label for="text" class="label">
        <span class="label-text">Votre message</span>
      </label>
      <textarea
        id="text"
        name="text"
        minlength="1"
        maxlength="2000"
        required
        class="textarea textarea-bordered h-36 w-full " />
    </div>

    <div class="pt-6 md:col-start-2 flex">
      <button type="submit" class="btn btn-primary w-full md:ml-auto md:w-2/3">Envoyer</button>
    </div>
  </form>
</template>


<script setup lang="ts">
import { $fetch } from "ohmyfetch";
import { useToaster } from "~/composables/useToaster";
import { ToastType } from "~/models/toast-type";

const toaster = useToaster();

const onSubmit = async (event: SubmitEvent) => {
  const formElement = event.target as HTMLFormElement;
  const formData = new FormData(formElement);

  try {
    await $fetch("/api/send-mail", {
      method: "post",
      body: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        text: formData.get("text")
      }
    });

    formElement.reset();

    toaster.makeToast({
      message: "Votre courriel a été envoyé",
      type: ToastType.Success
    });
  } catch (e) {
    toaster.makeToast({
      message: "Une erreur est survenue lors de l'envoi du courriel",
      type: ToastType.Error
    });
  }
};
</script>
