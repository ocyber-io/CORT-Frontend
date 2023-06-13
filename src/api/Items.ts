import { AxiosPromise } from "axios";
import { axiosInstance } from "./axios-Instance";
import { UserInterface } from "../shared/interfaces/UserInterface";

export class Items {
  static read(): AxiosPromise<UserInterface[]> {
    return axiosInstance({
      url: "/list",
      method: "get",
    });
  }

  // static create(data: AddProductModalValidator): AxiosPromise<ItemsInterface> {
  //   return axiosInstance({
  //     url: "/create",
  //     method: "post",
  //     data,
  //   });
  // }

  // static updateById(
  //   id: string,
  //   data: EditProductModalValidator
  // ): AxiosPromise<ItemsInterface> {
  //   return axiosInstance({
  //     url: `/update/${id}`,
  //     method: "patch",
  //     data,
  //   });
  // }

  // static deleteById(id: string): AxiosPromise<ItemsInterface> {
  //   return axiosInstance({
  //     url: `/delete/${id}`,
  //     method: "delete",
  //   });
  // }
}
