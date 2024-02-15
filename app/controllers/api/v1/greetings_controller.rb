module Api
  module V1
    class GreetingsController < ApplicationController
      # Get api/v1/greetings
      def index
        @greetings = Greeting.all
        @greetingsCount = Greeting.count

        random_greeting_id = rand(@greetingsCount)

        render json: @greetings[random_greeting_id], status: :ok
      end
    end
  end
end
