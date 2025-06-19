<script setup>
import { ref, onMounted ,onUnmounted} from 'vue'
import * as echarts from 'echarts/core'
import { GridComponent, TooltipComponent, GeoComponent } from 'echarts/components'
import { MapChart, ScatterChart,EffectScatterChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([MapChart, ScatterChart,EffectScatterChart, GeoComponent, GridComponent, UniversalTransition, TooltipComponent, CanvasRenderer])

const $chart = ref()
let chartInstance = null

const initChart = async () => {
  const res = await fetch('/js/world.json')
  const geoData = await res.json()
  echarts.registerMap('World', geoData)
  chartInstance = echarts.init($chart.value)
  chartInstance.setOption({
    tooltip: {
      trigger: 'item',
      position: 'top',
      formatter: params => {
        return `<div style="font-size: 20px;text-align: center"><div style="color:#333333;font-weight: bolder;margin-bottom: 10px;">${params.data.name}</div><div style="color: #9883cf;font-weight: bolder;">${params.data.value[2]}</div></div>`
      },
      backgroundColor: '#ffffff',
      borderWidth: 0,
      padding: [10, 60],
      textStyle: {}
    },
    geo: {
      show: true,
      map: 'World',
      silent: true,
      itemStyle: {
        areaColor: '#9883cf',
        borderWidth: 1,
        borderColor: '#9883cf'
      },
      emphasis: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#9883cf'
        }
      }
    },
    series: [
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbol: 'image://data:image/png;base64,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',
        symbolSize: [45 / 2, 53 / 2],
        geoIndex: 0,
        // label: {
        //   show: false,
        //   position: 'top',
        //   distance: 15,
        //   borderRadius: 4,
        //   backgroundColor: '#ffffff',
        //   padding: [10, 60],
        //   align: 'center',
        //   formatter: [
        //     '{name|}',
        //     '{value|}'
        //   ].join('\n'),
        //   rich: {
        //     name: {
        //       color: '#000000',
        //       fontSize: 20,
        //       lineHeight: 40,
        //       fontWeight: 'bolder'
        //     },
        //     value: {
        //       color: '#9883cf',
        //       fontSize: 20,
        //       fontWeight: 'bolder'
        //     }
        //   }
        // },
        data: [
          {
            name: 'USA',
            value: [-102, 40, '5-8']
          },
          {
            name: 'Canada',
            value: [-101, 57, '5-14']
          },
          {
            name: 'UK',
            value: [-2.8, 55, '4-8']
          },
          // {
          //   name: 'EU',
          //   value: [0,0, '5-9']
          // },
          {
            name: 'Australia',
            value: [133, -25, '6-12']
          },
          {
            name: 'UAE',
            value: [51, 25, '5-10']
          },
          {
            name: 'Brazil',
            value: [-55, -8, '7-15']
          },
        ]
      }
    ]
  })
}

const destroy  = ()=>{
  chartInstance && chartInstance.dispose()
}
onMounted(initChart)

onUnmounted(destroy)
</script>

<template>
  <div ref="$chart" class="index-container">

  </div>
</template>

<style scoped lang="scss">
.index-container {
  width: 100%;
  //aspect-ratio: 1279 / 578;
  height: 100%;
}
</style>
