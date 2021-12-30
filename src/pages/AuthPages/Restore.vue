<template>
  <div class="regtitle">Восстановление данных от вашего аккаунта</div>

  <div class="input_wrapper">
    <Input :type="'email'" :placeholder="'Электронная почта'" :value="email" @getValue="setEmail"/>
    <FormError :type="'error'" :text="'Данная почта не привязана ни к одному аккаунту Liberty RP'" :id="'restore-err'" :style="'opacity:0;'" />
    <FormError :type="'done'" :text="'Сообщение отправлено'" :id="'restore-send'" :style="'position:absolute; left: 350px; opacity:0;'" />   
  </div>

  <Button :text="'Восстановить'" @click="sendemail"/>

</template>

<script>
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';
import FormError from '@/components/FormError/FormError.vue';
import { collection, getDocs } from "@firebase/firestore";
import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import { db } from "@/firebase.js";

export default {
  components: {
    Input,
    Button,
    FormError
  },
  data() {
    return {
      email: ""
    }
  },
  methods: {
    setEmail(value) {
      this.email = value;
    },
    async sendemail() {
      const email = this.email;
      const querySnapshot = await getDocs(collection(db, "users"));
      const auth = getAuth();
      let emails = [];
      let uids = [];
      let el;
      
      document.getElementById('restore-err').style.opacity = "0";
      document.getElementById('restore-send').style.opacity = "0";

      querySnapshot.forEach((account) => {
        emails.push(account.data().email);
        uids.push(account.data().uid);
      })

      console.log(emails);
      console.log(uids);

      for (el = 0; el < emails.length; ++el) {
        if (email == emails[el]) {
          this.$swal({
            text: 'Сообщение было отправлено на данную почту',
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000
          });
          sendPasswordResetEmail(auth, email);
          document.getElementById('restore-err').style.opacity = "0";
          document.getElementById('restore-send').style.opacity = "1";
          break;
        } else {
          document.getElementById('restore-err').style.opacity = "1";
          document.getElementById('restore-send').style.opacity = "0";
        }
      }
    }
  }
};
</script>

<style></style>
