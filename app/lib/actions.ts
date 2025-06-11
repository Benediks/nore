"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" }); 

import { z } from "zod";

//skema invoice
const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});


const CreateInvoice = InvoiceFormSchema.omit({ id: true, date: true });
const UpdateInvoice = InvoiceFormSchema.omit({ id: true, date: true });


export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: Number(formData.get("amount")),
    status: formData.get("status"),
  }); 

  // Get the product ID from the form data
  const productId = formData.get("productId") as string;

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  await sql`
    INSERT INTO invoices (customer_id, product_id, amount, status, date)
    VALUES (${customerId}, ${productId}, ${amountInCents}, ${status}, ${date})
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}


export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  // Get the product ID from the form data
  const productId = formData.get("productId") as string;

  const amountInCents = amount * 100;

  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, product_id = ${productId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath("/dashboard/invoices");
}


//skema produk
const ProductFormSchema = z.object({
  id: z.string(),
  product_name: z.string(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  description: z.string(),
  image: z.string(),
  sales: z.coerce.number(),
});


const CreateProduct = ProductFormSchema.omit({ id: true, sales: true });
const UpdateProduct = ProductFormSchema.omit({ id: true });


export async function createProduct(formData: FormData) {
  const { product_name, price, stock, description, image } = CreateProduct.parse({
    product_name: formData.get("product_name"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    description: formData.get("description"),
    image: formData.get("image"),
  }); 

  const sales = 0; // Initialize sales to 0 for new products

  await sql`
    INSERT INTO products ( product_name, price, stock, description, image, sales)
    VALUES (${product_name}, ${price}, ${stock}, ${description}, ${image}, ${sales})
  `;

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(id: string, formData: FormData) {
  const { product_name, price, stock, description, image, sales } = UpdateProduct.parse({
    product_name: formData.get("product_name"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    description: formData.get("description"),
    image: formData.get("image"),
    sales: formData.get("sales"),
  });

  await sql`
    UPDATE products
    SET product_name = ${product_name}, price = ${price}, stock = ${stock}, description = ${description}, image = ${image}, sales = ${sales}
    WHERE id = ${id}
  `;

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function deleteProduct(id: string) {
  await sql`DELETE FROM products WHERE id = ${id}`;
  revalidatePath("/dashboard/products");
}