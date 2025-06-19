<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import { ElIcon } from 'element-plus'
import { CaretTop } from '@element-plus/icons-vue'

import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="brand-container ">
    <div class="content-wrap flex flex-column flex-vertical-center">
      <div class="brand-row-list">
        <div class="brand-row flex flex-vertical-top">
          <div class="content-box">
            <BlockTitle :label="t('l0')" color="#0077f0" class="block-title" />
            <div class="desc-box">
              <div class="desc">{{ t('t1') }}</div>
              <div class="desc">
                {{ t('t2') }}
              </div>
            </div>
          </div>
          <img src="@/assets/img/aboutUs/jozo/brand/img-1.png" alt="" class="row-img" />
        </div>
        <div class="brand-row flex flex-vertical-top">
          <img src="@/assets/img/aboutUs/jozo/brand/img-2.png" alt="" class="row-img" />
          <div class="content-box">
            <BlockTitle :label="t('l1')" color="#0077f0" class="block-title" />
            <div class="desc-box">
              <div class="desc">{{ t('t3') }}</div>
              <div class="desc">{{ t('t4') }}</div>
            </div>
          </div>
        </div>
        <div class="brand-row flex flex-vertical-top">
          <div class="content-box">
            <BlockTitle
              :label="t('l2')"
              react-color="#d9e6ff"
              class="block-title"
            />
            <div class="desc-box">
              <div class="desc">{{ t('t5') }}</div>
              <div class="desc">{{ t('t6') }}</div>
            </div>
          </div>
          <img src="@/assets/img/aboutUs/jozo/brand/img-3.png" alt="" class="row-img" />
        </div>
        <div class="brand-row flex flex-vertical-top">
          <img src="@/assets/img/aboutUs/jozo/brand/img-4.png" alt="" class="row-img" />
          <div class="content-box">
            <BlockTitle
              :label="t('l3')"
              color="#0077f0"
              class="block-title"
            />
            <div class="desc-box">
              <div class="desc">{{ t('t7') }}</div>
              <div class="desc">
                {{ t('t8') }}
              </div>
            </div>
          </div>
        </div>
        <div class="brand-row flex flex-vertical-top">
          <div class="content-box">
            <BlockTitle :label="t('l4')" color="#0077f0" class="block-title" />
            <div class="desc-box">
              <div class="desc">{{ t('t9') }}</div>
              <div class="desc">
                {{ t('t10') }}
              </div>
            </div>
          </div>
          <img src="@/assets/img/aboutUs/jozo/brand/img-5.png" alt="" class="row-img" />
        </div>
        <div class="brand-row flex flex-vertical-top">
          <img src="@/assets/img/aboutUs/jozo/brand/img-6.png" alt="" class="row-img" />
          <div class="content-box">
            <BlockTitle
              :label="t('l5')"
              color="#0077f0"
              class="block-title"
            />
            <div class="desc-box">
              <div class="desc">
                {{t('t11')}}
              </div>
              <div class="desc">
                {{t('t12')}}
              </div>
              <div class="desc">
                {{t('t13')}}
              </div>
            </div>
          </div>
        </div>
        <div class="brand-row flex flex-vertical-top">
          <div class="content-box">
            <BlockTitle :label="t('l6')" color="#0077f0" class="block-title" />
            <div class="desc-box">
              <div class="desc">
                {{t('t14')}}
              </div>
              <div class="desc-bolder">
                {{t('t15')}}
              </div>
            </div>
          </div>
          <img src="@/assets/img/aboutUs/jozo/brand/img-7.png" alt="" class="row-img" />
        </div>
      </div>
      <div class="perspective-wrap flex">
        <div class="item-box">
          <img src="@/assets/img/aboutUs/jozo/brand/img-8.png" alt="" class="item-img" />
          <div class="desc">
            {{t('t16')}}
          </div>
        </div>
        <div class="item-box">
          <img src="@/assets/img/aboutUs/jozo/brand/img-9.png" alt="" class="item-img" />
          <div class="desc">
            {{t('t17')}}
          </div>
        </div>
        <div class="item-box">
          <img src="@/assets/img/aboutUs/jozo/brand/img-10.png" alt="" class="item-img" />
          <div class="desc">
            {{t('t18')}}
          </div>
        </div>
      </div>
      <div class="user-wrap flex">
        <div class="user-item flex flex-column flex-vertical-center">
          <img src="@/assets/img/aboutUs/jozo/brand/img-11.png" alt="" class="avatar-img" />
          <div class="name">{{t('t19')}}</div>
          <div class="desc-box">
            {{t('t20')}}
            <el-icon class="arrow" color="#ffffff" size="4vw">
              <CaretTop />
            </el-icon>
          </div>
        </div>
        <div class="user-item flex flex-column flex-vertical-center">
          <img src="@/assets/img/aboutUs/jozo/brand/img-12.png" alt="" class="avatar-img" />
          <div class="name">{{t('t21')}}</div>
          <div class="desc-box">
            {{t('t22')}}
            <el-icon class="arrow" color="#ffffff" size="4vw">
              <CaretTop />
            </el-icon>
          </div>
        </div>
        <div class="user-item flex flex-column flex-vertical-center">
          <img src="@/assets/img/aboutUs/jozo/brand/img-13.png" alt="" class="avatar-img" />
          <div class="name">{{t('t23')}}</div>
          <div class="desc-box">
            {{ t('t24') }}
            <el-icon class="arrow" color="#ffffff" size="4vw">
              <CaretTop />
            </el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.brand-container {
  padding: 82px 0 41px;
  background: #f1f7ff;

  .brand-row-list {
    margin-bottom: 22px;

    .brand-row {
      gap: 61px;
      margin-bottom: 104px;

      &:last-child {
        margin-bottom: 65px;
      }

      .content-box {
        .block-title {
          margin-bottom: 45px;
          margin-top: 5px;
        }

        .desc-box {
          width: 707px;

          .desc {
            font-size: var(--desc-fz--small);
            line-height: 24px;
            color: #000000;
            margin-bottom: 19px;
          }

          .desc-bolder {
            font-size:var(--desc-fz--default);
            line-height: 29px;
            color: #000000;
            margin-top: 28px;
            font-weight: bolder;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .row-img {
        width: 341px;
      }
    }
  }

  .perspective-wrap {
    gap: 40px;
    margin-bottom: 68px;

    .item-box {
      padding: 30px 25px;
      background: #ffffff;
      border-radius: 13px;
      box-sizing: content-box;
      width: 190px;

      .item-img {
        width: 100%;
        margin-bottom: 14px;
      }

      .desc {
        font-size: var(--desc-fz--small);
        color: #000000;
        line-height: 24px;
        text-align: center;
      }

      &:last-child {
        width: 484px;
        text-align: center;

        .item-img {
          width: 305px;
        }
      }
    }
  }

  .user-wrap {
    gap: 20px;

    .user-item {
      gap: 31px;

      .avatar-img {
        width: 121px;
        border-radius: 50%;
      }

      .name {
        font-size: var(--desc-fz--default);
        color: #000000;
        font-weight: bolder;
      }

      .desc-box {
        width: 365px;
        padding: 34px 22px;
        background: #ffffff;
        border-radius: 11px;
        font-size: var(--desc-fz--small);
        line-height: 24px;
        color: #000000;
        position: relative;
        flex-grow: 1;

        .arrow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &:before,
        &:after {
          content: '”';
          font-size: var(--block-title-fz);
          position: absolute;
          color: #7664ff;
          font-weight: bolder;
        }
        &:before {
          left: 12px;
          top: 7px;
        }
        &:after {
          right: 12px;
          bottom: 0;
          transform: rotateY(180deg);
        }
      }
    }
  }
}
</style>
<i18n>
  {
    "en": {
      "l0": "BRAND",
      "l1": "QUALITY CONTROL",
      "l2": "REGARDING YOUR DISPOSABLE FUNDS",
      "l3": "ABOUT YOUR TARGET PROFIT MARGIN",
      "l4": "SUPPLY AND INVENTORY",
      "l5": "REFUNDS,RETURNS,AND EXCHANGES",
      "l6": "SHIPPING",
      "t1": "Your brand is the look and feel of the customer-facing aspects of your business. Creating a memorable brand impression helps increase customer loyalty.",
      "t2": "Jozodrop fully respects your expectations for product quality, delivery experience, and final packaging aesthetics. If the products and packaging do not meet expectations, Jozodrop takes full responsibility for this. We provide the best brand customization solutions to make your customers loyal to your brand, stand out in the competition, and offer 100% product customization tailored exactly to your ideas. Make your products unique in the market.",
      "t3": "Product quality has a significant impact on other aspects of your business, such as customer acquisition, brand loyalty, and returns.",
      "t4": "Since the beginning of our partnership, Jozodrop has committed to product quality and provides an unconditional quality assurance guarantee. We can conduct random inspections/testing of product quality at any time as per your requirements. This ensures that you can have complete confidence in the quality of the products you continue to sell. If products fail to meet customer expectations, Jozodrop offers a 100% after-sales service policy to keep your customers satisfied with your brand at all times.",
      "t5": "In some cases, the dropshipping business model allows you to purchase goods only after the buyer has placed an order. This model is attractive to entrepreneurs as it allows them to start operations with limited inventory funds.",
      "t6": "Jozodrop's dropshipping solution enables you to start and operate your business with less capital, without the need to purchase and store goods yourself.",
      "t7": "Compared to other business models like owning retail stores or establishing your own order fulfillment centers, dropshipping has a lower barrier to entry. Consequently, it may subject your business to more intense competition.",
      "t8": "For businesses utilizing dropshipping services, the market environment is competitive. Typically, dropshipping sellers invest less and can sell products at lower prices. If you operate a dropshipping business, your profit margins may be thin. To address this, consider positioning your business in a niche market outside of intense competition. Through market research, networking, and promotional efforts, identify niche markets that may be less competitive and profitable. Alternatively, invest in brand differentiation.",
      "t9": "Opting for dropshipping services may result in a lack of control or complete lack of control over the supply chain. Production delays may limit the number of orders dropshippers can fulfill. Buyers disappointed by out-of-stock items is something you'd want to avoid becoming a regular occurrence.",
      "t10": "Jozodrop relies on inventory from multiple collaborating factories. In instances where inventory from one factory is insufficient, we procure inventory from another. You need not worry about the complexity of logistics and distribution that comes with collaborating with multiple suppliers; Jozodrop takes your dropshipping further.",
      "t11": "Returns are inevitable in e-commerce businesses. Sometimes, the return process is straightforward: the buyer informs you of the specific return item, returns the item, you refund the buyer, and then liaise with the dropshipping supplier for your refund or compensation. However, this is not always the case.",
      "t12": "Jozodrop provides detailed refund and return policies for you to review before placing orders. We also outline clear responsibilities to avoid unnecessary disputes during order processing. If these measures still cannot meet your needs, our professional after-sales team will provide one-on-one assistance to help you resolve any difficulties in order processing.",
      "t13": "You should be prepared for more complex return and exchange processes. Take the time to understand how dropshipping suppliers handle returns before creating your refund and return policies.",
      "t14": "Even if you're not handling the goods physically, you still need to address buyers' questions and concerns about shipments, delivery, or product quality. A slight communication gap with dropshipping suppliers can lead to negative reviews and poor buyer experiences.",
      "t15": "To avoid this, Jozodrop considers the entire purchasing process from the buyer's perspective:",
      "t16": "Jozodrop provides 24/7 online customer service to respond promptly to your requests.",
      "t17": "Jozodrop collaborates with 30+ logistics companies to ensure the fastest possible product delivery to your customers.",
      "t18": "There are no additional labels inside Jozodrop's packages, so you need not worry about potential issues with the products. Jozodrop helps optimize every touchpoint to create a positive buyer experience, garner positive reviews, and build brand loyalty.",
      "t19": "Jerry",
      "t20": "Jerry serves more than 200 customers every day. With his positive work attitude and excellent sales skills, he has demonstrated extraordinary sales talent at work and achieved a series of impressive results. He has achieved or exceeded sales targets for several consecutive quarters, with sales increasing by more than 30% year-on-year, and has always been among the best in the team. This breakthrough in performance not only demonstrates his outstanding insight, but also proves his outstanding ability in customer relationship management, negotiation skills and problem solving.",
      "t21": "Kayn",
      "t22": "Kayn handles more than 2,000 orders for customers every day. He is able to gain in-depth understanding of customer information and reach consensus with customers on key terms such as price and delivery to maximize their interests. He is good at responding to various challenges flexibly and solving problems quickly to ensure that customers' transactions are completed smoothly. Every day, no matter how complex the situation is, he can quickly adjust strategies to provide customers with satisfactory solutions and ideal cooperation results. Through efficient communication and quick response, the customer transaction rate has increased by 50%.",
      "t23": "Kitty",
      "t24": "Kitty not only focuses on one-time transactions, but also strives to establish long-term customer relationships. She has successfully converted more than 50% of potential customers into long-term customers, with customer satisfaction maintained at more than 90% and a repurchase rate of 80%. She is familiar with the competitive situation and industry trends, and always provides customers with efficient and competitive solutions. She can accurately grasp the changes in customer needs and recommend the best products or services at the right time. Customers like to work with her very much.",
      "t25": ""
    },
    "vn": {
      "l0": "Thương hiệu",
      "l1": "Kiểm soát chất lượng",
      "l2": "Về quỹ sử dụng của bạn",
      "l3": "Về tỷ suất lợi nhuận mục tiêu của bạn",
      "l4": "Cung cấp và chứng khoán",
      "l5": "Hoàn tiền, trả lại và trao đổi",
      "l6": "Vận chuyển",
      "t1": "Thương hiệu của bạn là cách doanh nghiệp của bạn nhìn và cảm nhận về phía khách hàng. Tạo ấn tượng thương hiệu đáng nhớ giúp tăng lòng trung thành của khách hàng.",
      "t2": "Jozodrop hoàn toàn tôn trọng sự mong đợi của bạn về chất lượng sản phẩm, trải nghiệm giao hàng, Và cuối cùng là tính thẩm mỹ đóng gói. Nếu sản phẩm và bao bì không đáp ứng yêu cầu Jozodrop hoàn toàn chịu trách nhiệm về việc này. Chúng tôi cung cấp thương hiệu tốt nhất Giải pháp tùy chỉnh để giữ cho khách hàng của bạn trung thành với thương hiệu của bạn và nổi bật so với đối thủ cạnh tranh Cạnh tranh và cung cấp tùy chỉnh sản phẩm 100% hoàn toàn phù hợp với ý tưởng của bạn. Make Sản phẩm của bạn là duy nhất trên thị trường.",
      "t3": "Chất lượng sản phẩm có ảnh hưởng đáng kể đến các khía cạnh khác của doanh nghiệp của bạn, chẳng hạn như Mua lại khách hàng, lòng trung thành thương hiệu và phần thưởng.",
      "t4": "Kể từ khi chúng tôi thiết lập quan hệ đối tác, Jozodrop đã cam kết chất lượng sản phẩm và Cung cấp đảm bảo chất lượng vô điều kiện. Chúng ta có thể thực hiện ngẫu nhiên Kiểm tra/kiểm tra chất lượng sản phẩm bất cứ lúc nào theo yêu cầu của bạn. Cái này Đảm bảo bạn tự tin về chất lượng sản phẩm Tiếp tục bán. Nếu sản phẩm không đáp ứng được mong đợi của khách hàng, Jozodrop cung cấp 100% chính sách dịch vụ sau bán hàng để làm cho khách hàng của bạn hài lòng với thương hiệu của bạn Tất cả thời gian.",
      "t5": "Trong một số trường hợp, mô hình kinh doanh bán hàng trực tiếp cho phép bạn mua hàng hóa chỉ khi Người mua đã đặt hàng. Mô hình này rất hấp dẫn đối với các doanh nhân vì nó cho phép Họ bắt đầu hoạt động với vốn tồn kho hạn chế.",
      "t6": "Giải pháp bán hàng trực tiếp của Jozodrop cho phép bạn bắt đầu và điều hành doanh nghiệp của mình bằng cách: Ít tiền hơn và không cần phải mua và lưu trữ hàng hóa của riêng bạn.",
      "t7": "So sánh với việc sở hữu một cửa hàng bán lẻ hoặc xây dựng mô hình kinh doanh của riêng bạn Tại các trung tâm thực hiện đơn đặt hàng, ngưỡng nhập cảnh cho bán hàng trực tiếp thấp hơn. Do đó, nó Điều này có thể khiến doanh nghiệp của bạn cạnh tranh khốc liệt hơn.",
      "t8": "Đối với các doanh nghiệp sử dụng dịch vụ vận chuyển thả, môi trường thị trường rất cạnh tranh. Thông thường, người bán hàng trực tiếp đầu tư ít hơn và có thể bán sản phẩm với giá thấp hơn. Nếu Bạn đang điều hành một doanh nghiệp vận chuyển thả và biên lợi nhuận của bạn có thể thấp. Để giải quyết vấn đề này, Xem xét việc định vị doanh nghiệp của bạn trong một thị trường thích hợp bên ngoài sự cạnh tranh khốc liệt. Xác định niche thông qua nghiên cứu thị trường, mạng lưới và khuyến mãi Điều này có thể làm giảm khả năng cạnh tranh và lợi nhuận. Đầu tư vào thương hiệu Sự khác biệt.",
      "t9": "Lựa chọn dịch vụ vận chuyển thả có thể dẫn đến thiếu kiểm soát hoặc thiếu hoàn toàn Kiểm soát chuỗi cung ứng. Sự chậm trễ trong sản xuất có thể giới hạn số lượng đơn đặt hàng Shipper có thể hoàn thành Người mua thất vọng với hàng hóa hết hàng Hy vọng tránh trở thành tiêu chuẩn.",
      "t10": "Jozodrop dựa vào hàng tồn kho từ nhiều nhà máy đối tác. Trong trường hợp Không có đủ hàng tồn kho trong một nhà máy và chúng tôi mua hàng tồn kho từ một nhà máy khác. Ngươi",
      "t11": "Trong các doanh nghiệp thương mại điện tử, việc trả lại hàng là không thể tránh khỏi. Đôi khi quá trình trả về là Đi thẳng vào vấn đề: Người mua thông báo cho bạn về các mặt hàng trả lại cụ thể, trả lại, Bạn hoàn lại tiền cho người mua và sau đó liên hệ với nhà cung cấp dropshipping để được hoàn lại tiền Hoặc bồi thường. Tuy nhiên, không phải lúc nào cũng vậy.",
      "t12": "Jozodrop cung cấp chính sách hoàn tiền và trả lại chi tiết để bạn xem trước khi đặt hàng Lệnh. Chúng tôi cũng đưa ra các quy định rõ ràng về trách nhiệm trong Xử lý đơn đặt hàng. Nếu các biện pháp này vẫn không đáp ứng nhu cầu của bạn, các chuyên gia của chúng tôi Đội ngũ sau bán hàng sẽ cung cấp hỗ trợ một-một để giúp bạn giải quyết bất kỳ vấn đề nào Việc xử lý đơn đặt hàng rất khó khăn.",
      "t13": "Bạn nên chuẩn bị cho các quy trình trả lại và trao đổi phức tạp hơn. Cứ từ từ. Tìm hiểu cách các nhà cung cấp bán hàng trực tiếp xử lý hàng trả lại trước khi tạo tiền hoàn lại Chính sách hoàn trả",
      "t14": "Ngay cả khi bạn không tự mình xử lý hàng hóa, bạn vẫn phải giải quyết vấn đề của người mua. Các câu hỏi và mối quan tâm về vận chuyển, giao hàng hoặc chất lượng sản phẩm. Nhẹ Giao tiếp kém với các nhà cung cấp dropshipping có thể dẫn đến đánh giá tiêu cực và hiệu suất kém Trải nghiệm người mua",
      "t15": "Để tránh điều này, Jozodrop xem xét toàn bộ quá trình mua của người mua. Quan điểm:",
      "t16": "Jozodrop cung cấp dịch vụ khách hàng trực tuyến 24/7 để đáp ứng yêu cầu của bạn một cách kịp thời.",
      "t17": "Jozodrop hợp tác với hơn 30 công ty logistics để đảm bảo sản phẩm nhanh nhất giao cho khách hàng của bạn.",
      "t18": "Jozodrop không có nhãn bổ sung bên trong bao bì, vì vậy bạn không cần phải lo lắng Các vấn đề tiềm ẩn của sản phẩm Jozodrop giúp tối ưu hóa mọi điểm tiếp xúc, tạo ra một Trải nghiệm người mua tích cực, nhận được đánh giá tích cực và xây dựng lòng trung thành của thương hiệu.",
      "t19": "Jerry",
      "t20": "Jerry phục vụ hơn 200 khách hàng mỗi ngày. Với thái độ làm việc tích cực và kỹ năng bán hàng tuyệt vời, anh đã thể hiện tài năng bán hàng phi thường trong công việc và đạt được một loạt kết quả ấn tượng. Anh ấy đã đạt được hoặc vượt qua mục tiêu bán hàng của mình trong nhiều quý liên tiếp, với doanh số tăng hơn 30% so với năm trước và luôn là người giỏi nhất trong nhóm. Bước đột phá về hiệu suất này không chỉ thể hiện sự hiểu biết tuyệt vời của ông mà còn là khả năng tuyệt vời của ông trong quản lý quan hệ khách hàng, kỹ năng đàm phán và giải quyết vấn đề.",
      "t21": "Kayn",
      "t22": "Kayn xử lý hơn 2.000 đơn hàng mỗi ngày cho khách hàng. Ông có thể đi sâu vào thông tin khách hàng và đạt được sự đồng thuận với khách hàng về các điều khoản chính như giá cả và giao hàng để tối đa hóa lợi ích của họ. Anh ấy rất giỏi trong việc giải quyết các thách thức khác nhau một cách linh hoạt, giải quyết vấn đề nhanh chóng và đảm bảo giao dịch của khách hàng được hoàn thành suôn sẻ. Mỗi ngày, bất kể tình huống có phức tạp đến đâu, anh đều nhanh chóng điều chỉnh chiến lược để mang đến cho khách hàng những giải pháp thỏa đáng và kết quả hợp tác lý tưởng. Thông qua giao tiếp hiệu quả và phản hồi nhanh, tỷ lệ giao dịch của khách hàng tăng 50%.",
      "t23": "Kitty",
      "t24": "Kitty không chỉ tập trung vào các giao dịch một lần mà còn cố gắng xây dựng mối quan hệ khách hàng lâu dài. Cô đã chuyển đổi thành công hơn 50% khách hàng tiềm năng thành khách hàng dài hạn, duy trì sự hài lòng của khách hàng trên 90% và tỷ lệ mua lại trên 80%. Cô đã quen thuộc với tình hình cạnh tranh và xu hướng công nghiệp và luôn cung cấp cho khách hàng các giải pháp hiệu quả và cạnh tranh. Cô ấy có thể nắm bắt chính xác những thay đổi trong nhu cầu của khách hàng và giới thiệu sản phẩm hoặc dịch vụ tốt nhất vào đúng thời điểm. Khách hàng rất thích làm việc với cô ấy.",
      "t25": ""
    }
  }
  </i18n>
