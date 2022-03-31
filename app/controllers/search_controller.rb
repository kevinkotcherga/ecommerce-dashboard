# frozen_string_literal: true

# app/controllers/search_controller.rb
class MainController < ApplicationController
  def index; end

  def search
    @orders = Order.ransack(country_cont: params[:q])
                      .result(distinct: true)
  end
end
