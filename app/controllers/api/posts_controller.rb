class Api::PostsController < ApplicationController
  before_action :set_person
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: @person.posts
  end

  def show
    render json: @post
  end

  def create
    post = @person.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors
    end

  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors
    end

  end

  def destroy
    @post.destroy
  end

  private

  def set_person
    @person = Person.find(params[:person_id])
  end


  def set_post
    @post = @person.posts.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:body)
  end
  

end

