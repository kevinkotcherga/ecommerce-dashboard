# frozen_string_literal: true

# app/controllers/search_controller.rb
class MainController < ApplicationController
  # force_json force la requête pour être au format json
  before_action :force_json, only: :search
  def index; end

  def search
    @orders = Order.ransack(country_cont: params[:q])
                      .result(distinct: true)
  end

  private

  def force_json
    request.format = :json
  end
end
