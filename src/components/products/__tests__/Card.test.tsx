import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "../Card";

const product = {
  id: "123",
  title: "Product 1",
  description: "Description 1",
  image: "/vercel.svg",
  price: 100,
};

describe("<Card />", () => {
  it('with onClick "Edit" should call onEditProduct', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();

    render(
      <Card
        product={product as any}
        onEditProduct={onEdit}
        onDeleteProduct={onDelete}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /edit/i }));

    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(onEdit).toHaveBeenCalledWith(product);
  });
});

describe("<Card />", () => {
  it('with onClick "Delete" should call onDeleteProduct', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();

    render(
      <Card
        product={product as any}
        onEditProduct={onEdit}
        onDeleteProduct={onDelete}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));

    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(product);
  });
});