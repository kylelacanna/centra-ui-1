export const Action = Object.freeze({
    ShowModal: "ShowModal",
    HideModal: "HideModal"
});

export function ShowModal(cars) {
    console.log("CLICK WORKED");
return {type: Action.ShowModal};
}

export function HideModal(car) {
return {type: Action.HideModal};
}