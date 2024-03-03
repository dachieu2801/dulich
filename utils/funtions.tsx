// format money to VND
export function formatToVND(number) {
  if (isNaN(number)) {
    return "Không phải là số";
  }

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}

// detail vehicle
export function getVehicleIconName(type) {
  let vehicleName = "";
  switch (type) {
    case 1:
      vehicleName = "icon_airplane";
      break;
    case 2:
      vehicleName = "icon_car_small";
      break;
    case 3:
      vehicleName = "icon_bus";
      break;
    case 4:
      vehicleName = "icon_ship";
      break;
    default:
      break;
  }
  return vehicleName;
}
