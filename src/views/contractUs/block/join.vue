<script setup>
import { ref } from 'vue'
import BlockTitle from '@/views/common/block-title.vue'
import { ElIcon } from 'element-plus'
import { CaretBottom, Loading } from '@element-plus/icons-vue'
import useFetch from '@/utils/useFetch'
import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()

const generateFormData = () => ({
  userName: '',
  contactDesc: '',
  email: '', // email
  phoneNo: ''
})

const formData = ref(generateFormData())
const isSubmitButtonLoading = ref(false)
const handlerSubmit = async () => {
  try {
    isSubmitButtonLoading.value = true
    await useFetch('/portal/submitContactUs', 'POST', {
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })
    ElNotification.success({
      duration: 2000,
      message: 'Submit Success!',
      position: 'bottom-right'
    })
    formData.value = generateFormData()
    isSubmitButtonLoading.value = false
  } catch (e) {
    isSubmitButtonLoading.value = false
    ElNotification.error({
      duration: 2000,
      message: e.message,
      position: 'bottom-right'
    })
  }
}
</script>

<template>
  <div class="join-container flex flex-horizontal-center">
    <div class="content-wrap">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
      <div class="top-block">
        <div class="left">
          <img src="@/assets/img/contractus/join/img-1.png" alt="" class="img-1">
        </div>
        <div class="right">
          <div class="desc desc-1">
            {{ t('t2') }}
          </div>
          <div class="logo-box flex flex-vertical-center">
            <img src="@/assets/img/contractus/join/img-2.png" alt="" class="logo-img">
            <div class="logo-desc">
              {{ t('t3') }}
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-block">
        <div class="left">
          <div class="desc-2">
            <div class="desc">
              {{ t('t4') }}
            </div>
            <div class="desc">{{ t('t5') }}</div>
          </div>
          <div class="icon-title">{{ t('t12') }}</div>
          <div class="icon-list">
            <div class="icon-box flex flex-vertical-center icon-1">
              <img src="@/assets/img/contractus/join/icon-1.png" alt="" class="icon-img">
              <a href="mailto:info@exceedigital.co.uk" class="icon-label">info@exceedigital.co.uk</a>
            </div>
            <div class="icon-box flex flex-vertical-center icon-2">
              <img src="@/assets/img/contractus/join/icon-2.png" alt="" class="icon-img">
              <a href="https://www.instagram.com/jozodrop_uk/" class="icon-label">Jozodrop</a>
            </div>
            <div class="icon-box flex flex-vertical-center icon-3">
              <img src="@/assets/img/contractus/join/icon-3.png" alt="" class="icon-img">
              <a href="https://www.facebook.com/profile.php?id=61577243887748" class="icon-label">Jozodrop</a>
            </div>
            <div class="icon-box flex flex-vertical-center icon-5">
              <img src="@/assets/img/contractus/join/icon-5.png" alt="" class="icon-img">
              <a href="https://www.tiktok.com/@jozo_drop" class="icon-label">Jozo Drop</a>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="form-title">{{ t('t6') }}</div>
          <div class="form-box">
            <!--userName-->
            <div class="control-box">
              <input v-model="formData.userName" type="text" class="control" :placeholder="t('t7_1')">
              <label class="control-label">{{ t('t7') }}</label>
            </div>
            <!--phone-->
            <div class="control-box">
              <input v-model="formData.phoneNo" type="text" class="control" :placeholder="t('t8_1')">
              <label class="control-label">{{ t('t8') }}</label>
            </div>
            <!--email address-->
            <div class="control-box">
              <input v-model="formData.email" type="text" class="control" :placeholder="t('t9_1')">
              <label class="control-label">{{ t('t9') }}</label>
            </div>
            <div class="control-box">
              <textarea v-model="formData.contactDesc" class="control" :placeholder="t('t10_1')"></textarea>
              <label class="control-label">{{ t('t10') }}</label>
            </div>
            <!--submit-button-->
            <button
              class="submit-button flex flex-horizontal-center flex-vertical-center"
              :disabled="isSubmitButtonLoading"
              @click="handlerSubmit"
            >
              <el-icon v-if="isSubmitButtonLoading" size="24px" class="submit-button-loading">
                <Loading />
              </el-icon>
              <span>{{ t('t11') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.join-container {
  padding: 140px 0;
  background: #f1f7ff;
  border-top-left-radius: 80px;
  font-size: var(--desc-fz--default);
  line-height: 1.4;

  .block-title {
    margin-bottom: 30px;
    text-align: center;
  }

  .top-block {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;

    .left {
      margin-right: 20px;

      .img-1 {
        width: 270px;
      }
    }

    .right {
      .desc-1 {
        margin-bottom: 40px;
      }

      .logo-box {
        display: flex;
        align-items: center;
        border: 5px solid #cde4fd;
        padding: 20px;
        justify-content: center;

        border-radius: 16px;

        .logo-img {
          width: 310px;
          margin-right: 30px;
        }
      }
    }
  }

  .bottom-block {
    display: flex;
    align-items: flex-start;

    .left {
      display: flex;
      flex-direction: column;
      margin-right: 30px;

      .desc-2 {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-bottom: 40px;
      }

      .icon-title {
        font-size: var(--desc-fz--large);
        font-weight: bolder;
        margin-bottom: 20px;
        text-align: center;
      }

      .icon-list {
        display: flex;
        flex-wrap: wrap;

        .icon-box {
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          &:nth-child(2n+1){
            width: 60%;
          }


          .icon-img {
            width: 47px;
            height: 47px;
            margin-right: 10px;
          }

          .icon-label {
            text-decoration: none;
            color: #000000;
          }
        }
      }
    }

    .right {
      width: 540px;
      flex-shrink: 0;

      .form-title {
        color: #000000;
        font-weight: bolder;
        margin-bottom: 20px;
      }

      .form-box {
        .control-box {
          position: relative;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          border: 1px solid #b9cae1;
          margin-bottom: 10px;
          transition: border-color .25s;

          &:focus-within {
            border-color: #2486ff;
          }

          .control {
            font-size: 18px;
            line-height: 36px;
            appearance: none;
            outline: none;
            border: none;
            order: 2;
            padding: 0 18px;

            &::placeholder {
              color: #b5b5b5;
            }
          }

          select.control option {
            color: #000000;
            font-size: 22px;
          }

          select.control option[value=''] {
            color: #b5b5b5;
          }

          .control-label {
            padding: 0 18px;
            font-size: 18px;
            color: #000000;
            line-height: 42px;
            order: 1;
          }

          .select-caret {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .submit-button {
          margin-top: 36px;
          appearance: none;
          outline: none;
          background: #0077f0;
          height: 71px;
          font-size: 20px;
          color: #ffffff;
          font-weight: bolder;
          border: none;
          width: 100%;
          cursor: pointer;
          transition: background-color 200ms linear;

          &:hover {
            background: #0077f080;
          }

          &:disabled {
            cursor: no-drop;
          }

          @keyframes rotate {
            0% {
              rotate: 0deg;
            }
            100% {
              rotate: 360deg;
            }
          }

          .submit-button-loading {
            margin-right: 4px;
            animation: rotate 2s linear infinite;
          }
        }
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "JOIN US TO CREATE THE FUTURE TOGETHER!",
    "t2": "We believe that through collaboration, we can not only provide better services but also achieve growth and success together. Whether you are our existing customer or a new friend, you are welcome to join our affiliate marketing program and embark on a new journey with us!",
    "t3": "Join Jozodrop now, start your promotional journey, and enjoy the endless possibilities brought by referrals!",
    "t4": "Dear customer, if you have any questions, suggestions, or need help resolving issues related to our website while using Jozodrop, you can contact us through the following methods. We are eager to hear your suggestions and hope that with your help, we can create a dropshipping platform that is more user-friendly.",
    "t5": "You can leave your suggestions or questions below and email us.",
    "t6": "LEAVE YOUR MESSAGE BY FILLING IN THE FORM BELOW",
    "t7": "Full Name",
    "t7_1": "Enter your full name",
    "t8": "Phone Number",
    "t8_1": "Enter your phone number",
    "t9": "Email Address",
    "t9_1": "Enter your email address",
    "t10": "Message",
    "t10_1": "Enter your message...",
    "t11": "SEND MESSAGE",
    "t12": "CONTRACT US DIRECTLY"
  },
  "vn": {
    "t1": "Hãy cùng chúng tôi xây dựng tương lai!",
    "t2": "Chúng tôi tin rằng bằng cách hợp tác, chúng tôi không chỉ có thể cung cấp dịch vụ tốt hơn mà còn cùng nhau đạt được sự tăng trưởng và thành công. Cho dù bạn là khách hàng hiện tại của chúng tôi hay một người bạn mới, chúng tôi chào đón bạn tham gia chương trình tiếp thị liên kết của chúng tôi và bắt đầu một hành trình mới với chúng tôi!",
    "t3": "Tham gia Jozodrop ngay hôm nay và bắt đầu hành trình quảng cáo của bạn và tận hưởng những khả năng không giới hạn được giới thiệu!",
    "t4": "Kính gửi Quý khách hàng, nếu Quý khách có bất kỳ câu hỏi, đề xuất hoặc cần trợ giúp giải quyết các vấn đề liên quan đến trang web của chúng tôi khi sử dụng Jozodrop, Quý khách có thể liên hệ với chúng tôi theo các cách sau. Chúng tôi mong muốn được nghe đề xuất của bạn và hy vọng với sự giúp đỡ của bạn, chúng tôi có thể tạo ra một nền tảng bán hàng trực tiếp thân thiện với người dùng hơn.",
    "t5": "Bạn có thể để lại lời khuyên hoặc câu hỏi dưới đây và gửi email cho chúng tôi.",
    "t6": "Điền vào mẫu dưới đây để lại tin nhắn",
    "t7": "Họ tên",
    "t7_1": "Nhập tên đầy đủ của bạn...",
    "t8": "Số điện thoại",
    "t8_1": "Nhập điện thoại của bạn...",
    "t9": "Địa chỉ email",
    "t9_1": "Nhập địa chỉ email của bạn...",
    "t10": "Tin nhắn",
    "t10_1": "Nhập tin nhắn của bạn...",
    "t11": "Gửi tin nhắn",
    "t12": "Ký hợp đồng trực tiếp với chúng tôi"
  }
}
</i18n>
