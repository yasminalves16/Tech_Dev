class User {
  update(user: Partial<IPostRequest>) {
    // Atualizar usuário
  }
}

export interface IPostRequest {
  description: string;
  media?: string;
}

export interface IPost extends IPostRequest {
  id?: string;
  // createdAt: Date;
  // updatedAt: Date;
}

export interface IPostUpdate {
  id?: string;
  media?: string;
  description?: string;
}
