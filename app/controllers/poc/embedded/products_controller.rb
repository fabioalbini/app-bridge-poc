# frozen_string_literal: true

class Poc::Embedded::ProductsController < ApplicationController
  include ShopifyApp::EmbeddedApp
  include ShopifyApp::EnsureInstalled
  include ShopifyApp::ShopAccessScopesVerification
  layout "hello_world"


  def index
    @hello_world_props = { name: "Stranger" }
    @products = Product.all
  end
end
