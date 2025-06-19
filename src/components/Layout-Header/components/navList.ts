import { ref} from 'vue'


const labelConfig = {
  en:{
    'Home':'Home',
    'Jozo Product':'Jozo Product',
    'Jozo-Rewards':'Jozo-Rewards',
    'Integrations':'Integrations',
    'Service':'Service',
    'Platform Fulfillment Node Advantages':'Platform Fulfillment Node Advantages',
    'Product Procurement':'Product Procurement',
    'Warehouse':'Warehouse',
    'Logistics':'Logistics',
    'Platform Additional Value-Added Services':'Platform Additional Value-Added Services',
    'FAQ':'FAQ',
    'About Us':'About Us',
    'J0Z0':'JOZO',
    'Blog':'Blog',
  },
  vn:{
    'Home':'Trang chủ',
    'Jozo Product':'Sản phẩm Jozo',
    'Jozo-Rewards':'Jozo thưởng',
    'Integrations':'Tích hợp',
    'Service':'Dịch vụ sau bán hàng',
    'Platform Fulfillment Node Advantages':'Nền tảng thực hiện lợi thế nút',
    'Product Procurement':'Mua sản phẩm',
    'Warehouse':'Trang chủ',
    'Logistics':'Dịch vụ',
    'Platform Additional Value-Added Services':'Dịch vụ giá trị gia tăng nền tảng',
    'FAQ':'Câu hỏi thường gặp',
    'About Us':'Về chúng tôi',
    'J0Z0':'JOZO',
    'Blog':'Trang chủ',
  }
}


const navList = ref([
  {
    label: 'Home',
    to: '/',
    children: []
  },
  {
    label: 'Jozo Product',
    to: 'https://product.jozodrop.com/',
    isLink:true,
    children: []
  },
  {
    label: 'Jozo-Rewards',
    to: '/contractUs',
    children: []
  },
  {
    label: 'Integrations',
    to: '/integrations',
    children: []
  },
  {
    label: 'Service',
    to: '',
    children: [
      {
        label: 'Platform Fulfillment Node Advantages',
        to: '/advantage'
      },
      {
        label: 'Product Procurement',
        to: '/procurement'
      },
      {
        label: 'Warehouse',
        to: '/warehouse'
      },
      {
        label: 'Logistics',
        to: '/logistics'
      },
      {
        label: 'Platform Additional Value-Added Services',
        to: '/valueAddedService'
      }
    ]
  },
  {
    label: 'FAQ',
    to: '/faq',
    children: []
  },
  {
    label: 'About Us',
    to: '',
    children: [
      {
        label: 'J0Z0',
        to: '/aboutUs/jozo'
      },
      {
        label: 'Blog',
        to: '/aboutUs/blog'
      }
    ]
  },
])
export {navList ,labelConfig}
