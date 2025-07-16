// BarChart.js
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);


  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    // Gradient Colors
    const gradientRed = ctx.createLinearGradient(0, 400, 0, 0);
    gradientRed.addColorStop(0, 'rgba(133, 0, 39, 1)');
    gradientRed.addColorStop(1, 'rgba(255, 156, 185, 0.3)');

    const gradientBlue = ctx.createLinearGradient(0, 400, 0, 0);
    gradientBlue.addColorStop(0, 'rgba(0, 66, 45, 1)');
    gradientBlue.addColorStop(1, 'rgba(201, 255, 244, 0.2)');

    const gradientYellow = ctx.createLinearGradient(0, 400, 0, 0);
    gradientYellow.addColorStop(0, 'rgba(3, 12, 28, 1)');
    gradientYellow.addColorStop(1, 'rgba(126, 166, 240, 0.2)');

    // ข้อมูลย่อยใน tooltip สำหรับแต่ละแท่ง
    const subData = {
      "งานดำเนินคดี": ["รออนุมัติบอกเลิกสัญญา: 5 รายการ", "รอบอกเลิกสัญญา: 3 รายการ", "รอฟ้อง: 4 รายการ","รอพิพากษา: 1 รายการ","รอปรับปรุงหนี้ตามคำพิพากษา: 3 รายการ"],
      "งานบังคับคดี": ["รออนุมัติบังคับคดี: 6 รายการ", "รอยื่นสวมสิทธิ์/ออกหมายบังคับดี: 4 รายการ" , "รอยึดทรัพย์/อายัดเงิน: 0 รายการ", "รอขายทอดตลาด: 0 รายการ", "รอเปลี่ยนแปลงเงื่อนไขในการชำระหนี้ไกล่เกลี่ยชั้นบังคับคดี: 0 รายการ"],
      "ยื่นคำร้อง": ["รออนุมัติขอเฉลี่ยทรัพย์: 2 รายการ", "รออนุมัติขิรับชำระคดีล้มละลาย: 3 รายการ"],
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['งานดำเนินคดี', 'งานบังคับคดี', 'ยื่นคำร้อง'], // หัวข้อบนแกน X
        datasets: [
          {
            label: 'จำนวนรวม',
            data: [12, 10, 5], // ข้อมูลรวมในแต่ละแท่ง
            backgroundColor: [gradientRed, gradientBlue, gradientYellow],
            borderWidth: 1,
          },
          
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              title: (tooltipItems) => {
                // แสดงชื่อแท่งที่ hover
                return tooltipItems[0].label;
              },
              label: (tooltipItem) => {
                // const label = tooltipItem.label;
                const count = tooltipItem.raw; // จำนวนในแท่ง
                return `จำนวนรวม: ${count} รายการ`;
              },
              afterBody: (tooltipItems) => {
                const label = tooltipItems[0].label;
                if (subData[label]) {
                  // เพิ่มข้อมูลย่อยใน tooltip
                  return subData[label].map((item) => `- ${item}`);
                }
                return [];
              },
            },
          },
        },
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
