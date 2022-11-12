export interface orderDetails {
    ProductId: number,
    Quantity: number,
}

export interface order {
    OrderId?: number,
    OrderDate: string,
    UserId: string,
    Products: orderDetails[],
    PaymentType: "online" | "Cash"
}