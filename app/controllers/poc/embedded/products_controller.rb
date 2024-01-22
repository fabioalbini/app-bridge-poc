# frozen_string_literal: true

class Poc::Embedded::ProductsController < ApplicationController
  include ShopifyApp::EmbeddedApp
  include ShopifyApp::EnsureInstalled
  include ShopifyApp::ShopAccessScopesVerification
  layout "hello_world"


  def index
    @hello_world_props = { email: "stranger@email.com" }
    @products = Product.all
  end

  def publish
    @product_id = params[:id]
    @hello_world_props = { email: "Received request to publish product #{@product_id}" }
    @products = Product.all
    render :index
  end
end
