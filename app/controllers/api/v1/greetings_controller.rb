module Api
  module V1
    class GreetingsController < ApplicationController
      # Get api/v1/greetings
      def index
        @greetings = Greeting.all
        greetings_count = Greeting.count

        random_greeting_id = rand(greetings_count)

        render json: @greetings[random_greeting_id], status: :ok
      end
    end
  end
end
