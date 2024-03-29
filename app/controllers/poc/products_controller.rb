# frozen_string_literal: true

class Poc::ProductsController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { email: "stranger@email.com" }
    @products = Product.all
  end
end
