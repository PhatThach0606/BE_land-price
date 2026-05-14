export const LAND_TOOLS = [
  {
    type: 'function',
    function: {
      name: 'calculate_land_price',
      description:
        'Tính giá đất chính xác khi có tọa độ (lat, lng) hoặc số tờ, số thửa.',
      parameters: {
        type: 'object',
        properties: {
          lat: { type: 'number', description: 'Vĩ độ (Latitude)' },
          lng: { type: 'number', description: 'Kinh độ (Longitude)' },
          soTo: { type: 'number', description: 'Số tờ bản đồ' },
          soThua: { type: 'number', description: 'Số thửa đất' },
        },
      },
    },
  },
];
