<script setup>
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import Header from '@/Components/Header.vue';
    import Footer from '@/Components/Footer.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue'
    import Checkbox from '@/Components/Checkbox.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import TextInput from '@/Components/TextInput.vue';
    import TextArea from '@/Components/TextArea.vue';

    const form = useForm({
        email: '',
        phone: '',
        name: '',
        message: '',
        subscribe: true,
    });

    const submit = () => {
        form.post(route('contact.sendmessage'), {
            onSuccess: () => form.reset(),
            preserveScroll: true,
        });
    };
</script>

<template>
    <Head title="Contact Me" />

    <div class="relative bg-gray-100">
        <Header />

        <div class="hero px-6 md:px-20 lg:px-40 w-full py-28 bg-customBlue">
            <div class="grid grid-cols-4">
                <div class="col-span-4">
                    <div class="flex flex-col items-center relative">
                        <div class="bg-gray-900/60 rounded-full w-40 h-40 absolute -top-12 left-72 -z-10" />
                        <div class="text-sm font-semibold text-white">Message &middot; Inquiry &middot; Suggestion</div>
                        <h4 class="text-6xl lg:text-display font-bold text-white leading-tight">Contact Me</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact bg-gray-100 p-40 w-full">
            <div class="grid grid-cols-4 items-center">
                <div class="col-span-2">
                    <div>
                        <h4 class="text-7xl text-gray-700 font-bold">Leave A Message</h4>
                        <p class="text-gray-500 mt-4">Inquire about my services, write a message to me or maybe just have a chat?</p>
                    </div>
                    <div class="mt-10">
                        <form @submit.prevent="submit">
                            <div>
                                <InputLabel for="email" value="Email" />
                                <TextInput
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    required
                                    autofocus
                                />
                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="name" value="Name" />
                                <TextInput
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    required
                                />
                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="phone" value="Phone Number" />
                                <TextInput
                                    id="phone"
                                    v-model="form.phone"
                                    type="tel"
                                    class="mt-1 block w-full"
                                    required
                                />
                                <InputError class="mt-2" :message="form.errors.phone" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="message" value="Message" />
                                <TextArea
                                    id="message"
                                    :rows="4"
                                    v-model="form.message"
                                    class="mt-1 block w-full"
                                    required
                                />
                                <InputError class="mt-2" :message="form.errors.message" />
                            </div>

                            <div class="block mt-4">
                                <label class="flex items-center">
                                    <Checkbox v-model:checked="form.subscribe" name="subscribe" />
                                    <span class="ml-2 text-sm text-gray-600">Subscribe To Maling List</span>
                                </label>
                            </div>

                            <div class="flex items-center justify-end mt-4">
                                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                    Forgot your password?
                                </Link>

                                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Send Message
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-span-2">
                    <div>
                        <img src="../../assets/images/contact_me_doodle.svg" alt="Contact Me Doodle" class="mx-auto w-80">
                    </div>
                </div>
            </div>
        </div>

        <div class="cta bg-customBlue w-full px-10 md:px-20 lg:px-40 pt-20 pb-10 lg:pt-40 lg:pb-20">
            <div class="relative text-center">
                <div class="bg-gray-900/60 rounded-full w-40 h-40 absolute -top-20 left-60 -z-10" />
                <h4 class="text-5xl lg:text-7xl font-bold text-white">Convinced Yet?</h4>
                <p class="text-white font-light mt-5">Let's discuss your next big project idea and let me do all the hard work for you.</p>
            </div>
            <div class="mt-10 flex items-center justify-center">
                <PrimaryButton class="px-8 py-3">Hire Me</PrimaryButton>
            </div>
        </div>

        <Footer />
    </div>
</template>
<style scoped>
    .hero {
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    }
    .cta {
        clip-path: polygon(45% 3%, 64% 10%, 100% 10%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0 10%);
    }
</style>