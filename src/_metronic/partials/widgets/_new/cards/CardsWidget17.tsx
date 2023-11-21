/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useRef} from 'react'
import {KTIcon} from '../../../../helpers'
import {getCSSVariableValue} from '../../../../assets/ts/_utils'
import {useThemeMode} from '../../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  chartSize?: number
  chartLine?: number
  chartRotate?: number
  uniuqId?: number
  text?: any
}

const CardsWidget17: FC<Props> = ({
  className,
  chartSize = 70,
  chartLine = 11,
  chartRotate = 145,
  uniuqId = 1,
  text,
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  useEffect(() => {
    refreshChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }
    console.log('chartRef.current', chartRef.current)
    setTimeout(() => {
      initChart(chartSize, chartLine, chartRotate, uniuqId)
    }, 10)
  }

  return (
    <div className={`card card-flush ${className}`}>
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <div className='d-flex align-items-center'>
            {/* <span className='fs-4 fw-semibold text-gray-400 me-1 align-self-start'>$</span> */}

            <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'>{text?.one}</span>

            <span className='badge badge-light-success fs-base' style={{ whiteSpace: 'unset', textAlign: 'left' }}>
              <KTIcon iconName='' className='fs-5 text-success ms-n1' /> {text?.two}
            </span>
          </div>
          <span className='text-gray-400 pt-1 fw-semibold fs-6'>{text?.three}</span>
        </div>
      </div>

      <div className='card-body pt-2 pb-4 d-flex align-items-center'>
        <div className='d-flex flex-center me-5 pt-2'>
          <div
            id={'kt_card_widget_17_chart' + uniuqId}
            ref={chartRef}
            style={{minWidth: chartSize + 'px', minHeight: chartSize + 'px'}}
            data-kt-size={chartSize}
            data-kt-line={chartLine}
          ></div>
        </div>

        <div className='d-flex flex-column content-justify-center flex-row-fluid'>
          <div className='d-flex fw-semibold align-items-center'>
            <div className='bullet w-8px h-3px rounded-2 bg-success me-3'></div>
            <div className='text-gray-500 flex-grow-1 me-4'>{text?.four}</div>
            <div className='fw-bolder text-gray-700 text-xxl-end'>{text?.seven}</div>
          </div>
          <div className='d-flex fw-semibold align-items-center my-3'>
            <div className='bullet w-8px h-3px rounded-2 bg-primary me-3'></div>
            <div className='text-gray-500 flex-grow-1 me-4'>{text?.five}</div>
            <div className='fw-bolder text-gray-700 text-xxl-end'>{text?.eight}</div>
          </div>
          <div className='d-flex fw-semibold align-items-center'>
            {
              text?.six && (<div
                className='bullet w-8px h-3px rounded-2 me-3'
                style={{backgroundColor: '#E4E6EF'}}
              ></div>)
            }
            <div className='text-gray-500 flex-grow-1 me-4'>{text?.six}</div>
            <div className=' fw-bolder text-gray-700 text-xxl-end'>{text?.nine}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const initChart = function (
  chartSize: number = 70,
  chartLine: number = 11,
  chartRotate: number = 145,
  uniuqId
) {
  const el = document.getElementById('kt_card_widget_17_chart' + uniuqId)
  if (!el) {
    return
  }
  el.innerHTML = ''

  var options = {
    size: chartSize,
    lineWidth: chartLine,
    rotate: chartRotate,
    //percent:  el.getAttribute('data-kt-percent') ,
  }

  const canvas = document.createElement('canvas')
  const span = document.createElement('span')

  // @ts-ignore
  if (typeof G_vmlCanvasManager !== 'undefined') {
    // @ts-ignore
    G_vmlCanvasManager.initElement(canvas)
  }

  const ctx = canvas.getContext('2d')
  canvas.width = canvas.height = options.size

  el.appendChild(span)
  el.appendChild(canvas)

  // @ts-ignore
  ctx.translate(options.size / 2, options.size / 2) // change center
  // @ts-ignore
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI) // rotate -90 deg

  //imd = ctx.getImageData(0, 0, 240, 240);
  const radius = (options.size - options.lineWidth) / 2

  const drawCircle = function (color: string, lineWidth: number, percent: number) {
    percent = Math.min(Math.max(0, percent || 1), 1)
    if (!ctx) {
      return
    }

    ctx.beginPath()
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false)
    ctx.strokeStyle = color
    ctx.lineCap = 'round' // butt, round or square
    ctx.lineWidth = lineWidth
    ctx.stroke()
  }

  // Init 2
  drawCircle('#E4E6EF', options.lineWidth, 100 / 100)
  drawCircle(getCSSVariableValue('--bs-primary'), options.lineWidth, 100 / 150)
  drawCircle(getCSSVariableValue('--bs-success'), options.lineWidth, 100 / 250)
}

export {CardsWidget17}
